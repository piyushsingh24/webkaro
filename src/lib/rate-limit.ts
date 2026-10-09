/**
 * Minimal in-memory sliding-window rate limiter for server actions/APIs.
 *
 * NOTE (serverless): Vercel functions do not share memory across instances,
 * so this is a best-effort per-instance guard, not a global lock. It fully
 * protects a single local/dev server and raises the bar in production.
 * A shared store (Upstash Redis, etc.) can replace this in a later phase
 * without changing call sites.
 */

type Bucket = { hits: number[] };

const buckets = new Map<string, Bucket>();

// Opportunistic cleanup so the map cannot grow unboundedly.
let lastSweep = Date.now();
function sweep(now: number) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [key, bucket] of buckets) {
    if (bucket.hits.length === 0 || bucket.hits[bucket.hits.length - 1] < now - 3_600_000) {
      buckets.delete(key);
    }
  }
}

export type RateLimitResult =
  | { allowed: true; remaining: number }
  | { allowed: false; remaining: 0; retryAfterSeconds: number };

/**
 * @param key      Stable identifier, e.g. `login:<ip>:<email>`.
 * @param limit    Max attempts within the window.
 * @param windowMs Window length in milliseconds.
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const bucket = buckets.get(key) ?? { hits: [] as number[] };
  // Drop hits outside the window.
  while (bucket.hits.length > 0 && bucket.hits[0] <= now - windowMs) {
    bucket.hits.shift();
  }

  if (bucket.hits.length >= limit) {
    const retryAfterSeconds = Math.ceil((bucket.hits[0] + windowMs - now) / 1000);
    buckets.set(key, bucket);
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  bucket.hits.push(now);
  buckets.set(key, bucket);
  return { allowed: true, remaining: limit - bucket.hits.length };
}
