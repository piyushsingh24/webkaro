import { prisma } from "@/lib/prisma";
import {
  isDbConfigured,
  asStringArray,
  asRecordArray,
} from "@/lib/cms/db";
import {
  services as staticServices,
  serviceCategories as staticCategories,
  getServiceById as getStaticServiceById,
  type Service as UiService,
} from "@/data/services";

const DEFAULT_GRADIENT = "from-stone-200/60 to-stone-100/60";
const DEFAULT_GLOW = "bg-stone-200/40";

type DbService = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  price: string | null;
  pricingHint: string | null;
  timeline: string | null;
  features: unknown;
  deliverables: unknown;
  technologies: unknown;
  benefits: unknown;
  techStack: unknown;
  processSteps: unknown;
  caseStudy: unknown;
  seoTitle: string | null;
  seoDescription: string | null;
  category: { name: string };
};

/** UI-compatible service plus the database id (for relation lookups). */
export type CmsService = UiService & { dbId: string | null };

/** Map a DB row to the exact shape existing service components consume. */
export function toUiService(
  row: DbService,
  id: string,
  dbId: string | null = null
): CmsService {
  const techStack = asRecordArray<{ name: string; description: string }>(
    row.techStack
  ).map((t) => ({
    name: String(t.name ?? ""),
    description: String(t.description ?? ""),
  }));
  const processSteps = asRecordArray<{
    step: string;
    title: string;
    description: string;
  }>(row.processSteps).map((s) => ({
    step: String(s.step ?? ""),
    title: String(s.title ?? ""),
    description: String(s.description ?? ""),
  }));
  const cs =
    typeof row.caseStudy === "object" && row.caseStudy !== null
      ? (row.caseStudy as Record<string, unknown>)
      : null;

  return {
    id,
    dbId,
    title: row.title,
    shortDescription: row.shortDescription,
    description: row.description,
    icon: row.icon,
    price: row.price ?? "",
    pricingHint: row.pricingHint ?? "",
    timeline: row.timeline ?? "",
    features: asStringArray(row.features),
    deliverables: asStringArray(row.deliverables),
    color: DEFAULT_GRADIENT,
    glow: DEFAULT_GLOW,
    category: row.category.name as UiService["category"],
    seoTitle: row.seoTitle ?? undefined,
    seoDescription: row.seoDescription ?? undefined,
    techStackDetails: techStack.length > 0 ? techStack : undefined,
    processSteps: processSteps.length > 0 ? processSteps : undefined,
    caseStudy: cs
      ? {
          project: String(cs.project ?? ""),
          challenge: String(cs.challenge ?? ""),
          solution: String(cs.solution ?? ""),
          results: String(cs.results ?? ""),
        }
      : undefined,
    whyChoosePoints:
      asStringArray(row.benefits).length > 0
        ? asStringArray(row.benefits)
        : undefined,
  };
}

async function dbServices(): Promise<CmsService[] | null> {
  if (!isDbConfigured()) return null;
  const rows = await prisma.service.findMany({
    where: { status: "PUBLISHED" },
    include: { category: true },
    orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
  });
  return rows.map((r) => toUiService(r, r.slug, r.id));
}

/** Published services for public pages (DB first, static fallback). */
export async function listPublishedServices(): Promise<CmsService[]> {
  const fromDb = await dbServices().catch(() => null);
  if (fromDb) return fromDb;
  return staticServices.map((s) => ({ ...s, dbId: null }));
}

export async function getPublishedService(slug: string): Promise<CmsService | null> {
  if (isDbConfigured()) {
    try {
      const row = await prisma.service.findFirst({
        where: { slug, status: "PUBLISHED" },
        include: { category: true },
      });
      if (row) return toUiService(row, row.slug, row.id);
      return null;
    } catch {
      const s = getStaticServiceById(slug);
      return s ? { ...s, dbId: null } : null;
    }
  }
  const s = getStaticServiceById(slug);
  return s ? { ...s, dbId: null } : null;
}

/** Service slugs for generateStaticParams (published only). */
export async function listPublishedServiceSlugs(): Promise<string[]> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.service.findMany({
        where: { status: "PUBLISHED" },
        select: { slug: true },
      });
      return rows.map((r) => r.slug);
    } catch {
      /* fall through to static */
    }
  }
  return staticServices.map((s) => s.id);
}

export type ServiceCategoryRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  sortOrder: number;
  serviceCount: number;
};

export async function listServiceCategories(): Promise<
  { name: string; slug: string; description: string }[]
> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.serviceCategory.findMany({
        orderBy: { sortOrder: "asc" },
      });
      if (rows.length > 0) {
        return rows.map((r) => ({
          name: r.name,
          slug: r.slug,
          description: r.description ?? "",
        }));
      }
    } catch {
      /* fall through */
    }
  }
  return staticCategories.map((c) => ({
    name: c.name,
    slug: c.name.toLowerCase().replace(/\s+/g, "-"),
    description: c.description,
  }));
}


