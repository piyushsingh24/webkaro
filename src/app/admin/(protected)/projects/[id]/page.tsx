import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isDbConfigured } from "@/lib/cms/db";
import { projectStore } from "@/lib/cms/stores";
import ProjectForm from "../_components/ProjectForm";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!isDbConfigured()) notFound();
  const item = await projectStore.findById(id).catch(() => null);
  if (!item) notFound();

  return (
    <ProjectForm
      mode="edit"
      id={item.id}
      canPublish={session?.user?.role === "ADMIN"}
      initial={{
        slug: item.slug,
        title: item.title,
        category: item.category,
        clientName: item.clientName ?? "",
        industry: item.industry ?? "",
        summary: item.summary,
        problem: item.problem ?? "",
        strategy: item.strategy ?? "",
        results: item.results,
        outcomes: item.outcomes,
        tags: item.tags,
        screenshots: item.screenshots,
        metrics: item.metrics,
        thumbnail: item.thumbnail ?? "",
        imageAlt: item.imageAlt ?? "",
        demoUrl: item.demoUrl ?? "",
        featured: item.featured,
        status: item.status,
        sortOrder: item.sortOrder,
        seoTitle: item.seoTitle ?? "",
        seoDescription: item.seoDescription ?? "",
        ogImage: item.ogImage ?? "",
      }}
    />
  );
}
