import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import PostForm from "../_components/PostForm";

async function options() {
  if (!isDbConfigured()) return { categories: [], tags: [], authors: [] };
  try {
    const [categories, tags, authors] = await Promise.all([
      prisma.blogCategory.findMany({
        orderBy: { sortOrder: "asc" },
        select: { id: true, name: true },
      }),
      prisma.blogTag.findMany({
        orderBy: { name: "asc" },
        select: { id: true, name: true },
      }),
      prisma.author.findMany({
        orderBy: { name: "asc" },
        select: { id: true, name: true },
      }),
    ]);
    return { categories, tags, authors };
  } catch {
    return { categories: [], tags: [], authors: [] };
  }
}

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  const { categories, tags, authors } = await options();
  return (
    <PostForm
      mode="create"
      categories={categories}
      tags={tags}
      authors={authors}
      canPublish={session?.user?.role === "ADMIN"}
    />
  );
}
