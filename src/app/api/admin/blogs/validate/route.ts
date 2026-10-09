import { requireEditor } from "@/lib/admin-auth";
import {
  ok,
  fail,
  parseBody,
  requireDbConfigured,
  toApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import {
  analyzePost,
  extractInternalLinks,
} from "@/lib/seo-checks";

/**
 * POST /api/admin/blogs/validate — publishing quality gate.
 * Returns warnings (never blocks saving) + internal-link verification +
 * slug availability. All checks run server-side against live data.
 */

const RESERVED_SLUGS = new Set([
  "frontend", "backend", "devops", "database",
  "startup", "saas", "product", "trends",
  "new", "categories", "tags", "authors", "validate", "preview",
]);

const CORE_PATHS = new Set([
  "/", "/about", "/services", "/projects", "/products", "/expertise",
  "/contact", "/blogs", "/careers", "/security", "/privacy-policy",
  "/terms", "/compliance", "/faq", "/community", "/community/open-source",
  "/location/delhi-wazirabad", "/cinematic",
]);

type LinkStatus = "ok" | "unpublished" | "broken" | "skipped";

async function verifyLink(path: string): Promise<{ url: string; status: LinkStatus; note?: string }> {
  const clean = path.split("#")[0].split("?")[0].replace(/\/+$/, "") || "/";
  const segs = clean.split("/").filter(Boolean);

  // Detail routes: verify the slug against the database (any status).
  if (segs.length === 2) {
    const [root, slug] = segs;
    try {
      if (root === "blogs") {
        const row = await prisma.blogPost.findUnique({ where: { slug }, select: { status: true, publishedAt: true } });
        if (!row) return { url: path, status: "broken", note: "No post with this slug." };
        const live =
          row.status === "PUBLISHED" && (!row.publishedAt || row.publishedAt <= new Date());
        return live
          ? { url: path, status: "ok" }
          : { url: path, status: "unpublished", note: `Target is ${row.status}.` };
      }
      if (root === "services") {
        const row = await prisma.service.findUnique({ where: { slug }, select: { status: true } });
        if (!row) return { url: path, status: "broken", note: "No service with this slug." };
        return row.status === "PUBLISHED"
          ? { url: path, status: "ok" }
          : { url: path, status: "unpublished", note: `Target is ${row.status}.` };
      }
      if (root === "projects") {
        const row = await prisma.project.findUnique({ where: { slug }, select: { status: true } });
        if (!row) return { url: path, status: "broken", note: "No project with this slug." };
        return row.status === "PUBLISHED"
          ? { url: path, status: "ok" }
          : { url: path, status: "unpublished", note: `Target is ${row.status}.` };
      }
      if (root === "faq") {
        const row = await prisma.faq.findUnique({ where: { slug }, select: { status: true } });
        if (!row) return { url: path, status: "broken", note: "No FAQ with this slug." };
        return row.status === "PUBLISHED"
          ? { url: path, status: "ok" }
          : { url: path, status: "unpublished", note: `Target is ${row.status}.` };
      }
    } catch {
      return { url: path, status: "skipped", note: "Database unavailable." };
    }
  }

  if (CORE_PATHS.has(clean)) return { url: path, status: "ok" };
  return { url: path, status: "skipped", note: "Not a verifiable content route." };
}

export async function POST(req: Request) {
  const auth = await requireEditor();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const parsed = await parseBody<{
      id?: string;
      slug?: string;
      title?: string;
      excerpt?: string;
      content?: string;
      coverImage?: string;
      imageAlt?: string;
      seoTitle?: string;
      seoDescription?: string;
      categoryId?: string;
      authorId?: string;
    }>(req);
    if ("response" in parsed) return parsed.response;
    const input = parsed.data;

    const warnings = analyzePost({
      title: input.title ?? "",
      excerpt: input.excerpt ?? "",
      content: input.content ?? "",
      coverImage: input.coverImage,
      imageAlt: input.imageAlt,
      seoTitle: input.seoTitle,
      seoDescription: input.seoDescription,
      categoryId: input.categoryId,
      authorId: input.authorId,
    });

    // Slug availability (excluding the record being edited).
    let slugAvailable: boolean | null = null;
    const slug = (input.slug ?? "").trim();
    if (slug) {
      if (RESERVED_SLUGS.has(slug)) {
        warnings.push({
          field: "slug",
          message: `"${slug}" collides with a built-in blog route (/blogs/${slug}).`,
        });
        slugAvailable = false;
      } else {
        const existing = await prisma.blogPost.findUnique({
          where: { slug },
          select: { id: true },
        });
        slugAvailable = !existing || existing.id === input.id;
        if (!slugAvailable) {
          warnings.push({ field: "slug", message: "Another post already uses this slug." });
        }
      }
    }

    const links = await Promise.all(
      extractInternalLinks(input.content ?? "").map(verifyLink)
    );

    return ok({ warnings, links, slugAvailable });
  } catch (err) {
    return toApiError(err);
  }
}
