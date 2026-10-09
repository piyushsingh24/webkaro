import { prisma } from "@/lib/prisma";
import { postStore } from "@/lib/cms/stores";
import {
  isDbConfigured,
  estimateReadingMinutes,
} from "@/lib/cms/db";
import {
  blogs as staticBlogs,
  getBlogBySlug as getStaticBlogBySlug,
  type BlogPost as UiBlogPost,
} from "@/data/blogs";

type DbPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  status: string;
  publishedAt: Date | null;
  updatedAt: Date;
  readingMinutes: number | null;
  createdAt: Date;
  seoTitle: string | null;
  seoDescription: string | null;
  canonicalUrl: string | null;
  ogImage: string | null;
  category: { name: string; slug: string } | null;
  author: { name: string } | null;
  tags: { tag: { name: string; slug: string } }[];
};

/**
 * Live-visibility gate: PUBLISHED rows whose publish date is null
 * (immediate) or in the past. Future-dated posts stay hidden everywhere
 * public until reached — no scheduler needed (checked at read time).
 */
function liveFilter(now: Date) {
  return {
    status: "PUBLISHED" as const,
    OR: [{ publishedAt: null }, { publishedAt: { lte: now } }],
  };
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export type CmsBlogPost = UiBlogPost & {
  tags: { name: string; slug: string }[];
  categorySlug: string | null;
  coverImage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  canonicalUrl: string | null;
  ogImage: string | null;
  /** ISO timestamps for SEO metadata / JSON-LD / sitemap. */
  publishedISO: string;
  updatedISO: string;
};

export function toUiPost(row: DbPost): CmsBlogPost {
  const publishedAt = row.publishedAt ?? row.createdAt;
  const minutes = row.readingMinutes ?? estimateReadingMinutes(row.content);
  return {
    id: row.slug,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category?.name ?? "General",
    author: row.author?.name ?? "Webkaro Collective",
    date: formatDate(publishedAt),
    readTime: `${minutes} min read`,
    tags: row.tags.map((t) => t.tag),
    categorySlug: row.category?.slug ?? null,
    coverImage: row.coverImage,
    seoTitle: row.seoTitle,
    seoDescription: row.seoDescription,
    canonicalUrl: row.canonicalUrl,
    ogImage: row.ogImage,
    publishedISO: publishedAt.toISOString(),
    updatedISO: row.updatedAt.toISOString(),
  };
}

const postInclude = {
  category: true,
  author: true,
  tags: { include: { tag: true } },
} as const;

function staticToCms(b: UiBlogPost): CmsBlogPost {
  const parsed = new Date(b.date);
  const iso = Number.isNaN(parsed.getTime())
    ? new Date().toISOString()
    : parsed.toISOString();
  return {
    ...b,
    tags: [],
    categorySlug: null,
    coverImage: null,
    seoTitle: null,
    seoDescription: null,
    canonicalUrl: null,
    ogImage: null,
    publishedISO: iso,
    updatedISO: iso,
  };
}

export async function listPublishedPosts(): Promise<CmsBlogPost[]> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.blogPost.findMany({
        where: liveFilter(new Date()),
        include: postInclude,
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return rows.map((r) => toUiPost(r as any));
    } catch {
      /* fall through */
    }
  }
  return staticBlogs.map(staticToCms);
}

export async function getPublishedPost(
  slug: string
): Promise<CmsBlogPost | null> {
  if (isDbConfigured()) {
    try {
      const row = await prisma.blogPost.findFirst({
        where: { slug, ...liveFilter(new Date()) },
        include: postInclude,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (row) return toUiPost(row as any);
      return null;
    } catch {
      const s = getStaticBlogBySlug(slug);
      return s ? staticToCms(s) : null;
    }
  }
  const s = getStaticBlogBySlug(slug);
  return s ? staticToCms(s) : null;
}

/** Related posts: same category first, then recent — never the post itself. */
export async function listRelatedPosts(
  slug: string,
  categorySlug: string | null,
  count = 3
): Promise<CmsBlogPost[]> {
  const all = await listPublishedPosts();
  const others = all.filter((p) => p.slug !== slug);
  const sameCat = categorySlug
    ? others.filter((p) => p.categorySlug === categorySlug)
    : [];
  const rest = others.filter((p) => !sameCat.includes(p));
  return [...sameCat, ...rest].slice(0, count);
}

export async function listPublishedPostSlugs(): Promise<string[]> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.blogPost.findMany({
        where: liveFilter(new Date()),
        select: { slug: true },
      });
      return rows.map((r) => r.slug);
    } catch {
      /* fall through */
    }
  }
  return staticBlogs.map((b) => b.slug);
}

export async function listBlogCategories(): Promise<
  { id: string; name: string; slug: string; hubSlug: string | null }[]
> {
  if (isDbConfigured()) {
    try {
      return await prisma.blogCategory.findMany({
        orderBy: { sortOrder: "asc" },
        select: { id: true, name: true, slug: true, hubSlug: true },
      });
    } catch {
      /* fall through */
    }
  }
  return [];
}

/** Any post by id, any status — for the protected admin preview only.
 *  Never use on public routes (drafts must stay private). */
export async function getAnyPostById(id: string): Promise<CmsBlogPost | null> {
  if (!isDbConfigured()) return null;
  try {
    const row = await postStore.findById(id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return row ? toUiPost(row as any) : null;
  } catch {
    return null;
  }
}
