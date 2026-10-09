import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { listPublishedProjects } from "@/lib/cms/projects";

export const metadata: Metadata = {
  title: "Our Portfolio | Webkaro Case Studies",
  description: "Explore our collection of high-performance web applications, SaaS platforms, and digital experiences engineered by Webkaro.",
  keywords: ["Web Development Portfolio", "Next.js Projects", "MERN Stack Case Studies", "Webkaro Works"],
  openGraph: {
    title: "Webkaro Portfolio | Engineering Digital Excellence",
    description: "Driven by results, engineered for scale. View our latest projects.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/projects",
  },
};

export default async function ProjectsPage() {
  // Published projects from the CMS (static fallback when DB is unconfigured).
  const projects = await listPublishedProjects();
  return <ProjectsClient projects={projects} />;
}
