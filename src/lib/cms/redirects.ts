import { prisma } from "@/lib/prisma";

/**
 * Redirect validation + slug-change auto-creation.
 * Destinations are local paths only (no open-redirect surface).
 */

export function isLocalPath(path: string): boolean {
  return path.startsWith("/") && !path.startsWith("//");
}

/**
 * Validate a redirect pair. Returns an error message or null when valid.
 * Rejects: non-local paths, identity mapping, and chains that would loop
 * back to the source (walked up to 5 hops).
 */
export async function validateRedirect(
  fromPath: string,
  toPath: string
): Promise<string | null> {
  const from = fromPath.trim();
  const to = toPath.trim();
  if (!isLocalPath(from)) return "Source must be a local path (e.g. /blogs/old-slug).";
  if (!isLocalPath(to)) return "Destination must be a local path.";
  if (from === to) return "Source and destination are identical.";
  if (from.length > 500 || to.length > 500) return "Paths are too long (max 500).";

  // Walk the existing chain starting at the destination: if it ever leads
  // back to the source (or cycles), the new pair would create a loop.
  const seen = new Set<string>([from]);
  let current: string | null = to;
  for (let i = 0; i < 5 && current; i++) {
    if (seen.has(current)) {
      return "This redirect would create a loop with existing redirects.";
    }
    seen.add(current);
    let next: string | null = null;
    try {
      const row: { toPath: string } | null = await prisma.redirect.findUnique({
        where: { fromPath: current },
        select: { toPath: true },
      });
      next = row?.toPath ?? null;
    } catch {
      return null; // DB hiccup: don't block on transient errors here
    }
    current = next;
  }
  return null;
}

/**
 * Auto-create a redirect when a published post changes slug.
 * Skips silently when: nothing changed, old URL was never live-relevant,
 * a redirect already exists (preserves manual edits), or DB is unavailable.
 */
export async function createSlugRedirect(
  fromPath: string,
  toPath: string
): Promise<void> {
  if (fromPath === toPath || !isLocalPath(fromPath) || !isLocalPath(toPath)) {
    return;
  }
  try {
    const error = await validateRedirect(fromPath, toPath);
    if (error) return;
    const existing = await prisma.redirect.findUnique({ where: { fromPath } });
    if (existing) return;
    await prisma.redirect.create({ data: { fromPath, toPath } });
  } catch {
    /* redirect bookkeeping must never fail a content save */
  }
}
