import { prisma } from "@/lib/prisma";
import { isDbConfigured, asStringArray, asRecordArray } from "@/lib/cms/db";
import {
  projects as staticProjects,
  getProjectBySlug as getStaticProjectBySlug,
  type Project as UiProject,
  type ProjectDetail as UiProjectDetail,
} from "@/data/projects";

type DbProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  thumbnail: string | null;
  tags: unknown;
  demoUrl: string | null;
  outcomes: unknown;
  problem: string | null;
  strategy: string | null;
  results: unknown;
  metrics: unknown;
  screenshots: unknown;
  imageAlt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
};

export function toUiProjectDetail(row: DbProject): UiProjectDetail {
  return {
    id: row.slug,
    slug: row.slug,
    title: row.title,
    category: row.category,
    thumbnail: row.thumbnail ?? "/logo.png",
    description: row.summary,
    tags: asStringArray(row.tags),
    demoUrl: row.demoUrl ?? undefined,
    outcomes:
      asStringArray(row.outcomes).length > 0
        ? asStringArray(row.outcomes)
        : undefined,
    problem: row.problem ?? "",
    strategy: row.strategy ?? "",
    results: asStringArray(row.results),
    metrics: asRecordArray<{ label: string; value: string }>(row.metrics).map(
      (m) => ({ label: String(m.label ?? ""), value: String(m.value ?? "") })
    ),
    screenshots: asStringArray(row.screenshots),
  };
}

export function toUiProject(row: DbProject): UiProject {
  const d = toUiProjectDetail(row);
  const { ...base } = d;
  return base;
}

export async function listPublishedProjects(): Promise<UiProject[]> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.project.findMany({
        where: { status: "PUBLISHED" },
        orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
      });
      return rows.map(toUiProject);
    } catch {
      /* fall through to static */
    }
  }
  return staticProjects;
}

/** Featured projects for the homepage (featured flag, fallback: first N). */
export async function listFeaturedProjects(count = 3): Promise<UiProject[]> {
  const all = await listPublishedProjects();
  if (!isDbConfigured()) return all.slice(0, count);
  try {
    const rows = await prisma.project.findMany({
      where: { status: "PUBLISHED", featured: true },
      orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
      take: count,
    });
    if (rows.length > 0) return rows.map(toUiProject);
  } catch {
    /* fall through */
  }
  return all.slice(0, count);
}

export async function getPublishedProject(
  slug: string
): Promise<UiProjectDetail | null> {
  if (isDbConfigured()) {
    try {
      const row = await prisma.project.findFirst({
        where: { slug, status: "PUBLISHED" },
      });
      if (row) return toUiProjectDetail(row);
      return null;
    } catch {
      return getStaticProjectBySlug(slug) ?? null;
    }
  }
  return getStaticProjectBySlug(slug) ?? null;
}

export async function listPublishedProjectSlugs(): Promise<string[]> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.project.findMany({
        where: { status: "PUBLISHED" },
        select: { slug: true },
      });
      return rows.map((r) => r.slug);
    } catch {
      /* fall through */
    }
  }
  return staticProjects.map((p) => p.slug);
}
