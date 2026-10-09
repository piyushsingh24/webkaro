import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import {
  testimonials as staticTestimonials,
  type Testimonial as UiTestimonial,
} from "@/data/testimonials";
import { faqs as staticFaqs, type FAQ as UiFaq } from "@/data/faq";

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// ------------------------- Testimonials -------------------------

export async function listPublishedTestimonials(): Promise<UiTestimonial[]> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.testimonial.findMany({
        where: { status: "PUBLISHED" },
        orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
      });
      return rows.map((r) => ({
        id: r.id,
        name: r.clientName,
        role: r.role ?? "",
        company: r.company ?? "",
        quote: r.content,
        verified: r.verified,
        initials: initialsOf(r.clientName),
      }));
    } catch {
      /* fall through */
    }
  }
  return staticTestimonials;
}

export async function listFeaturedTestimonials(
  count = 5
): Promise<UiTestimonial[]> {
  const all = await listPublishedTestimonials();
  if (!isDbConfigured()) return all.slice(0, count);
  try {
    const rows = await prisma.testimonial.findMany({
      where: { status: "PUBLISHED", featured: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
      take: count,
    });
    if (rows.length > 0) {
      return rows.map((r) => ({
        id: r.id,
        name: r.clientName,
        role: r.role ?? "",
        company: r.company ?? "",
        quote: r.content,
        verified: r.verified,
        initials: initialsOf(r.clientName),
      }));
    }
  } catch {
    /* fall through */
  }
  return all.slice(0, count);
}

// ------------------------- FAQs -------------------------

export type CmsFaq = UiFaq & { status?: string };

export async function listPublishedFaqs(): Promise<UiFaq[]> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.faq.findMany({
        where: { status: "PUBLISHED" },
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
      });
      return rows.map((r) => ({
        id: r.id,
        slug: r.slug,
        question: r.question,
        answer: r.answer,
        details: r.details ?? "",
        category: r.category ?? undefined,
      }));
    } catch {
      /* fall through */
    }
  }
  return staticFaqs;
}

export async function getPublishedFaq(slug: string): Promise<UiFaq | null> {
  const all = await listPublishedFaqs();
  return all.find((f) => f.slug === slug) ?? null;
}

export async function listPublishedFaqSlugs(): Promise<string[]> {
  const all = await listPublishedFaqs();
  return all.map((f) => f.slug);
}

/** FAQs linked to a service (detail-page sidebar), plus global ones. */
export async function listFaqsForService(
  serviceId: string,
  count = 3
): Promise<UiFaq[]> {
  if (isDbConfigured()) {
    try {
      const rows = await prisma.faq.findMany({
        where: { status: "PUBLISHED", serviceId },
        orderBy: [{ sortOrder: "asc" }],
        take: count,
      });
      if (rows.length > 0) {
        return rows.map((r) => ({
          id: r.id,
          slug: r.slug,
          question: r.question,
          answer: r.answer,
          details: r.details ?? "",
          category: r.category ?? undefined,
        }));
      }
    } catch {
      /* fall through */
    }
  }
  return [];
}
