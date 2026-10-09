/**
 * Shared CMS primitives.
 *
 * DB-or-static strategy: public getters use MySQL when DATABASE_URL is set.
 * When it is NOT set (fresh checkout, offline build), they fall back to the
 * existing static `src/data/*` files so the site and `next build` keep
 * working. A *failed* connection is never masked — only a missing URL falls
 * back. Drafts are never returned by public getters.
 */

export function isDbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((v): v is string => typeof v === "string")
    : [];
}

export function asRecordArray<T extends Record<string, unknown>>(
  value: unknown
): T[] {
  return Array.isArray(value)
    ? value.filter(
        (v): v is T => typeof v === "object" && v !== null && !Array.isArray(v)
      )
    : [];
}

/** Estimated reading time in minutes (200 wpm), minimum 1. */
export function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** URL-safe slug from arbitrary text (max `max` chars). */
export function slugify(text: string, max = 150): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, max)
    .replace(/-+$/g, "");
}

export type Pagination = { page: number; perPage: number; skip: number };

export function parsePagination(
  searchParams: URLSearchParams,
  defaultPerPage = 20,
  maxPerPage = 100
): Pagination {
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const perPage = Math.min(
    maxPerPage,
    Math.max(1, Number(searchParams.get("perPage")) || defaultPerPage)
  );
  return { page, perPage, skip: (page - 1) * perPage };
}
