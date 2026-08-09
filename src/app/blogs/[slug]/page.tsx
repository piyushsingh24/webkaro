import { getBlogBySlug } from "@/data/blogs";
import { ArrowLeft, Share2, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import BlogClientWrapper from "./BlogClientWrapper";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: `${blog.title} | Webkaro Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: ["/og-image.jpg"], // Fallback or use blog.image if exists
    },
     twitter: {
       card: "summary_large_image",
       title: blog.title,
       description: blog.excerpt,
     },
     alternates: {
       canonical: `/blogs/${slug}`,
     },
   };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) return <div>Article not found</div>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "datePublished": blog.date,
    "image": "https://webkaro.in/og-image.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "Webkaro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webkaro.in/logo.png"
      }
    }
  };

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="space-y-6">
            <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold w-fit">
              {blog.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight font-outfit">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
                  W
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">{blog.author}</p>
                  <p className="text-foreground/30 dark:text-white/30 text-[10px]">{blog.date} • {blog.readTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button className="p-3 bg-primary/5 dark:bg-white/5 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 text-foreground/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-all border border-border hover:border-primary/50 group">
                  <Twitter className="w-4 h-4 transition-transform group-hover:scale-110" />
                </button>
                <button className="p-3 bg-primary/5 dark:bg-white/5 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 text-foreground/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-all border border-border hover:border-primary/50 group">
                  <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                </button>
                <button className="p-3 bg-primary/5 dark:bg-white/5 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 text-foreground/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-all border border-border hover:border-primary/50 group">
                  <Share2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Wrapper with animations */}
      <BlogClientWrapper excerpt={blog.excerpt} content={blog.content} />

      <FinalCTA />
    </div>
  );
}
