import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/cms/db";

/**
 * Shared helpers for admin CRUD Route Handlers.
 * Every handler in src/app/api/admin/* uses these so auth, slugs,
 * publication transitions, and revalidation behave identically.
 */

/** Ensure a slug is unique for a model; auto-suffixes (-2, -3, …). */
export async function ensureUniqueSlug(
  findBySlug: (slug: string) => Promise<unknown | null>,
  base: string,
  exclude?: (row: unknown) => boolean
): Promise<string> {
  const root = slugify(base) || "item";
  for (let i = 0; i < 10; i++) {
    const candidate = i === 0 ? root : `${root}-${i + 1}`;
    const existing = await findBySlug(candidate);
    if (!existing || (exclude && exclude(existing))) return candidate;
  }
  throw new SlugConflictError(
    `Could not generate a unique slug for "${base}". Please choose another title.`
  );
}

export class SlugConflictError extends Error {}

/**
 * Publication transition: stamping publishedAt the first time a record
 * becomes PUBLISHED. Unpublishing keeps history (never rewritten).
 */
export function applyPublishTransition<T extends { publishedAt?: Date | null }>(
  current: T | null,
  nextStatus: "DRAFT" | "PUBLISHED" | "ARCHIVED",
  publishedAt?: string
): { publishedAt?: Date | null } {
  if (nextStatus !== "PUBLISHED") return {};
  if (publishedAt) return { publishedAt: new Date(publishedAt) };
  if (!current?.publishedAt) return { publishedAt: new Date() };
  return {};
}

/** Revalidate listing + detail + home + sitemap after any mutation. */
export async function revalidateContent(paths: string[]): Promise<void> {
  const all = new Set([...paths, "/", "/sitemap.xml"]);
  for (const p of all) {
    revalidatePath(p);
  }
}

/** res.json-safe error for Prisma unique-constraint violations. */
export function isUniqueViolation(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    (err as { code?: string }).code === "P2002"
  );
}

export { prisma };
