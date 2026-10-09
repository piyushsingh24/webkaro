import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/blog/ArticleView";
import { getAnyPostById, listRelatedPosts } from "@/lib/cms/posts";

export const metadata: Metadata = {
  title: "Post Preview | Webkaro Admin",
  robots: { index: false, follow: false },
};

/**
 * Protected draft preview — lives under the admin layout guard
 * (ADMIN-only), inherits its noindex. No public URL can reach drafts:
 * public getters filter by status + publish date, and the sitemap only
 * lists live slugs.
 */
export default async function BlogPreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getAnyPostById(id);
  if (!post) notFound();

  const related = await listRelatedPosts(post.slug, post.categorySlug, 3);

  return (
    <ArticleView
      post={post}
      related={related}
      preview
      backHref={`/admin/blogs/${id}`}
    />
  );
}
