/**
 * Publishing quality checks for blog posts — pure functions, client-safe.
 * These produce actionable WARNINGS, never scores or ranking claims.
 * Blocking validation (required fields, lengths) stays in zod schemas.
 */

export type SeoWarning = {
  field: string;
  message: string;
};

export type PostCheckInput = {
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  categoryId?: string;
  authorId?: string;
};

export type Heading = { level: number; text: string };

const FENCED_CODE = /```[\s\S]*?```/g;
const INLINE_CODE = /`[^`]*`/g;

function stripCode(markdown: string): string {
  return markdown.replace(FENCED_CODE, "").replace(INLINE_CODE, "");
}

/** ATX headings (# …) outside fenced code blocks. */
export function extractHeadings(markdown: string): Heading[] {
  const clean = stripCode(markdown);
  const out: Heading[] = [];
  for (const line of clean.split("\n")) {
    const m = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (m) out.push({ level: m[1].length, text: m[2].trim().slice(0, 200) });
  }
  return out;
}

/** Internal link targets from Markdown links/images (deduped, capped). */
export function extractInternalLinks(markdown: string, cap = 50): string[] {
  const clean = stripCode(markdown);
  const found = new Set<string>();
  const re = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(clean)) !== null && found.size < cap) {
    const href = m[1].trim();
    if (href.startsWith("/") && !href.startsWith("//")) found.add(href);
    else if (/^https:\/\/(www\.)?webkaro\.in(\/|$)/i.test(href)) {
      found.add(new URL(href).pathname || "/");
    }
  }
  return [...found];
}

export function countWords(markdown: string): number {
  const text = stripCode(markdown)
    .replace(/[#>*_~\-+[\]()!|]/g, " ")
    .replace(/https?:\/\/\S+/g, " ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function analyzePost(input: PostCheckInput): SeoWarning[] {
  const warnings: SeoWarning[] = [];
  const title = input.title.trim();
  const metaTitle = (input.seoTitle ?? "").trim() || title;
  const metaDesc = (input.seoDescription ?? "").trim() || input.excerpt.trim();
  const excerpt = input.excerpt.trim();
  const content = input.content.trim();

  if (!title) warnings.push({ field: "title", message: "Title is required before publishing." });
  else if (title.length > 70)
    warnings.push({ field: "title", message: `Title is ${title.length} characters — keep it under ~70.` });

  if (metaTitle.length > 60)
    warnings.push({ field: "seoTitle", message: `SEO title is ${metaTitle.length} characters — Google typically shows ~60.` });

  if (!excerpt)
    warnings.push({ field: "excerpt", message: "Excerpt is required (listings + meta fallback)." });
  if (metaDesc.length > 160)
    warnings.push({ field: "seoDescription", message: `Meta description is ${metaDesc.length} characters — aim for ~155.` });

  if (!content)
    warnings.push({ field: "content", message: "Article body is empty." });
  else {
    const words = countWords(content);
    if (words < 300)
      warnings.push({ field: "content", message: `Body is ~${words} words — thin content rarely performs; aim for 600+.` });
  }

  if (!input.coverImage?.trim())
    warnings.push({ field: "coverImage", message: "No featured image — social shares fall back to the site logo." });
  else if (!input.imageAlt?.trim())
    warnings.push({ field: "imageAlt", message: "Featured image has no alt text (accessibility + image SEO)." });

  const headings = extractHeadings(content);
  // The template renders the title as the page H1, so the body must not
  // contain its own H1 — sections start at ##.
  if (headings.some((h) => h.level === 1))
    warnings.push({
      field: "content",
      message: "Body contains an H1 (#) — the title is already the page H1; use ## for sections.",
    });
  for (let i = 1; i < headings.length; i++) {
    if (headings[i].level - headings[i - 1].level > 1) {
      warnings.push({
        field: "content",
        message: `Heading hierarchy skips a level before "${headings[i].text.slice(0, 60)}".`,
      });
      break;
    }
  }

  if (!input.categoryId)
    warnings.push({ field: "categoryId", message: "No category — affects listings and related posts." });
  if (!input.authorId)
    warnings.push({ field: "authorId", message: "No author — byline falls back to “Webkaro Collective”." });

  return warnings;
}
