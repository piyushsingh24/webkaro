import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getProjectBySlug } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return createMetadata("/projects", {
      title: "Project Not Found | Webkaro",
      description: "The requested project could not be found.",
    });
  }
  return createMetadata(`/projects/${project.slug}`, {
    title: `${project.title} | Webkaro Case Study`,
    description: project.description,
    type: "article",
  });
}

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
