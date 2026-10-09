import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";

/**
 * Site settings (key-value) + homepage section visibility.
 * Every getter has a static default so pages render before the admin
 * configures anything — missing settings never break the public site.
 */

export const DEFAULT_SETTINGS: Record<string, string> = {
  hero_headline: "Digital Experiences\nThat Drive\nReal Growth.",
  hero_description:
    "We partner with ambitious startups and growing businesses to design websites, SaaS platforms and digital products that create measurable business impact.",
  hero_primary_cta_text: "Start Your Project",
  hero_primary_cta_url: "/contact",
  hero_secondary_cta_text: "View Our Work",
  hero_secondary_cta_url: "/projects",
  contact_email: "info@webkaro.in",
  contact_phone: "+91 70489 03201",
  whatsapp_url: "https://wa.me/917048903201",
  social_twitter: "https://twitter.com/webkaro_dev",
  social_linkedin: "https://linkedin.com/company/webkaro",
  social_instagram: "https://instagram.com/webkaro_",
  social_facebook: "",
  footer_about:
    "Premium web development studio engineering high-performance digital experiences.",
  featured_services: "[]",
  featured_projects: "[]",
  featured_testimonials: "[]",
  faq_selection: "[]",
};

export async function getSiteSettings(): Promise<Record<string, string>> {
  if (!isDbConfigured()) return { ...DEFAULT_SETTINGS };
  try {
    const rows = await prisma.siteSetting.findMany();
    const merged = { ...DEFAULT_SETTINGS };
    for (const row of rows) merged[row.key] = row.value;
    return merged;
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

/** Parse a JSON-array setting into string slugs (never throws). */
export function asSlugList(value: string | undefined): string[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter((v): v is string => typeof v === "string")
      : [];
  } catch {
    return [];
  }
}

export type HomepageSectionState = {
  key: string;
  isVisible: boolean;
  sortOrder: number;
};

const DEFAULT_SECTION_ORDER = [
  "hero",
  "services",
  "projects",
  "process",
  "why",
  "statistics",
  "founders",
  "testimonials",
  "tech",
  "faq",
  "cta",
];

export async function getHomepageSections(): Promise<HomepageSectionState[]> {
  const defaults = DEFAULT_SECTION_ORDER.map((key, i) => ({
    key,
    isVisible: true,
    sortOrder: i,
  }));
  if (!isDbConfigured()) return defaults;
  try {
    const rows = await prisma.homepageSection.findMany();
    if (rows.length === 0) return defaults;
    const byKey = new Map(rows.map((r) => [r.key, r]));
    return defaults.map((d) => {
      const row = byKey.get(d.key);
      return row
        ? { key: d.key, isVisible: row.isVisible, sortOrder: row.sortOrder }
        : d;
    });
  } catch {
    return defaults;
  }
}

/** Look up a manual redirect for a retired path (slug changes). */
export async function getRedirectTarget(path: string): Promise<string | null> {
  if (!isDbConfigured()) return null;
  try {
    const row = await prisma.redirect.findUnique({
      where: { fromPath: path },
    });
    return row?.toPath ?? null;
  } catch {
    return null;
  }
}
