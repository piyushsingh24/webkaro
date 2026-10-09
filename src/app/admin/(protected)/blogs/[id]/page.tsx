import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Eye } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import { postStore } from "@/lib/cms/stores";
import PostForm from "../_components/PostForm";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!isDbConfigured()) notFound();

  const [item, categories, tags, authors] = await Promise.all([
    postStore.findById(id).catch(() => null),
    prisma.blogCategory
      .findMany({ orderBy: { sortOrder: "asc" }, select: { id: true, name: true } })
      .catch(() => []),
    prisma.blogTag
      .findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } })
      .catch(() => []),
    prisma.author
      .findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } })
      .catch(() => []),
  ]);
  if (!item) notFound();

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Link
          href={`/admin/blogs/${item.id}/preview`}
          className="inline-flex items-center gap-2 px-4 h-10 rounded-xl text-xs font-bold border transition-colors duration-200"
          style={{ borderColor: "rgba(0,0,0,0.1)", color: "#2563EB" }}
        >
          <Eye className="w-4 h-4" /> Preview article
        </Link>
      </div>
      <PostForm
      mode="edit"
      id={item.id}
      categories={categories}
      tags={tags}
      authors={authors}
      canPublish={session?.user?.role === "ADMIN"}
      initial={{
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        content: item.content,
        coverImage: item.coverImage ?? "",
        imageAlt: item.imageAlt ?? "",
        categoryId: item.categoryId ?? "",
        authorId: item.authorId ?? "",
        status: item.status,
        publishedAt: item.publishedAt
          ? item.publishedAt.toISOString()
          : undefined,
        readingMinutes: item.readingMinutes ?? undefined,
        seoTitle: item.seoTitle ?? "",
        seoDescription: item.seoDescription ?? "",
        canonicalUrl: item.canonicalUrl ?? "",
        ogImage: item.ogImage ?? "",
        tagIds: item.tags.map((t) => t.tagId),
      }}
      />
    </div>
  );
}
