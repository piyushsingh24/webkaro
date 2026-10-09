import { ArrowLeft, Share2, Twitter, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import BlogClientWrapper from "./BlogClientWrapper";
import type { CmsBlogPost } from "@/lib/cms/posts";

const SITE_URL = "https://www.webkaro.in";

function absoluteImage(path: string | null): string {
  if (!path) return `${SITE_URL}/og-image.jpg`;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Shared BlogPosting JSON-LD built strictly from real CMS data. */
export function buildArticleJsonLd(
  post: CmsBlogPost,
  canonicalPath: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.publishedISO,
    dateModified: post.updatedISO,
    image: absoluteImage(post.coverImage),
    mainEntityOfPage: `${SITE_URL}${canonicalPath}`,
    publisher: {
      "@type": "Organization",
      name: "Webkaro",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export type ArticleViewPost = CmsBlogPost;

/**
 * Shared article rendering for the public page and the protected
 * admin preview. Markup is identical; preview mode adds a banner,
 * skips JSON-LD/CTA, and links back to the editor.
 */
export default function ArticleView({
  post,
  related,
  preview = false,
  backHref,
  backLabel,
}: {
  post: ArticleViewPost;
  related: ArticleViewPost[];
  preview?: boolean;
  backHref?: string;
  backLabel?: string;
}) {
  const canonicalPath = post.canonicalUrl || `/blogs/${post.slug}`;

  return (
    <div className="pt-32 pb-24">
      {!preview && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildArticleJsonLd(post, canonicalPath)),
          }}
        />
      )}

      {preview && (
        <div className="px-6 mb-10">
          <div className="max-w-4xl mx-auto px-5 py-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3" style={{ backgroundColor: "#FFFBEB", borderColor: "#F59E0B" }}>
            <p className="text-sm font-semibold" style={{ color: "#92400E" }}>
              Draft preview — visible only to signed-in admins. Not indexed, not in the sitemap.
            </p>
            {backHref && (
              <Link href={backHref} className="text-xs font-bold underline" style={{ color: "#92400E" }}>
                {backLabel ?? "Back to editor"}
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Article Header */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <Link href={preview ? "/admin/blogs" : "/blogs"} className="inline-flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {preview ? "Back to Posts" : "Back to Blog"}
          </Link>

          <div className="space-y-6">
            <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold w-fit">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight font-outfit">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
                  W
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">{post.author}</p>
                  <p className="text-foreground/30 dark:text-white/30 text-[10px]">{post.date} • {post.readTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button className="p-3 bg-primary/5 dark:bg-white/5 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 text-foreground/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-all border border-border hover:border-primary/50 group" aria-label="Share on X">
                  <Twitter className="w-4 h-4 transition-transform group-hover:scale-110" />
                </button>
                <button className="p-3 bg-primary/5 dark:bg-white/5 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 text-foreground/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-all border border-border hover:border-primary/50 group" aria-label="Share on LinkedIn">
                  <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                </button>
                <button className="p-3 bg-primary/5 dark:bg-white/5 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 text-foreground/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-all border border-border hover:border-primary/50 group" aria-label="Share article">
                  <Share2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Wrapper with animations */}
      <BlogClientWrapper excerpt={post.excerpt} content={post.content} />

      {/* Related articles */}
      {related.length > 0 && (
        <section className="px-6 mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-outfit mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blogs/${item.slug}`}
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">
                    {item.category}
                  </p>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                    {item.title}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/50 group-hover:text-primary transition-colors">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {!preview && <FinalCTA source="blog-cta" />}
    </div>
  );
}
