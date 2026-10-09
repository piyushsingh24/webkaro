import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import ArticleView from "@/components/blog/ArticleView";
import {
  getPublishedPost,
  listPublishedPostSlugs,
  listRelatedPosts,
} from "@/lib/cms/posts";
import { getRedirectTarget } from "@/lib/cms/settings";

export async function generateStaticParams() {
  const slugs = await listPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedPost(slug);
  if (!blog) return { title: "Article Not Found" };

  const title = blog.seoTitle || `${blog.title} | Webkaro Blog`;
  const description = blog.seoDescription || blog.excerpt;
  const ogImage = blog.ogImage || "/og-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title: blog.title,
      description,
      type: "article",
      publishedTime: blog.publishedISO,
      modifiedTime: blog.updatedISO,
      authors: [blog.author],
      images: [ogImage],
    },
     twitter: {
       card: "summary_large_image",
       title: blog.title,
       description,
     },
     alternates: {
       canonical: blog.canonicalUrl || `/blogs/${slug}`,
     },
   };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getPublishedPost(slug);

  if (!blog) {
    const target = await getRedirectTarget(`/blogs/${slug}`);
    if (target) redirect(target);
    notFound();
  }

  const related = await listRelatedPosts(blog.slug, blog.categorySlug, 3);

  return <ArticleView post={blog} related={related} />;
}
