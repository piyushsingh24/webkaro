import { z } from "zod";

/**
 * Zod validation for every CMS write operation (admin API + forms).
 * Length limits protect the database and keep rendered pages sane.
 */

const slugField = z
  .string()
  .trim()
  .min(1, "Slug is required.")
  .max(180, "Slug is too long.")
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Slug may contain only lowercase letters, numbers and hyphens."
  );

const statusField = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);

const optionalUrl = z
  .string()
  .trim()
  .max(500, "URL is too long.")
  .refine(
    (v) =>
      v === "" ||
      v.startsWith("/") ||
      v.startsWith("http://") ||
      v.startsWith("https://"),
    "Must be a relative path or http(s) URL."
  )
  .transform((v) => (v === "" ? undefined : v))
  .optional();

const stringList = (maxItems: number, maxLen: number) =>
  z
    .array(z.string().trim().min(1).max(maxLen))
    .max(maxItems)
    .optional();

const techStackItem = z.object({
  name: z.string().trim().min(1).max(120),
  description: z.string().trim().max(2000).default(""),
});

const processStep = z.object({
  step: z.string().trim().max(40).default(""),
  title: z.string().trim().min(1).max(200),
  description: z.string().trim().max(2000).default(""),
});

const caseStudy = z.object({
  project: z.string().trim().max(300).default(""),
  challenge: z.string().trim().max(5000).default(""),
  solution: z.string().trim().max(5000).default(""),
  results: z.string().trim().max(5000).default(""),
});

const metricItem = z.object({
  label: z.string().trim().min(1).max(80),
  value: z.string().trim().min(1).max(80),
});

// ------------------------- Services -------------------------

export const serviceSchema = z.object({
  slug: slugField,
  title: z.string().trim().min(1, "Title is required.").max(200),
  shortDescription: z.string().trim().min(1, "Short description is required.").max(2000),
  description: z.string().trim().min(1, "Description is required.").max(20000),
  icon: z.string().trim().max(60).optional(),
  categoryId: z.string().min(1, "Category is required."),
  price: z.string().trim().max(100).optional(),
  pricingHint: z.string().trim().max(200).optional(),
  timeline: z.string().trim().max(100).optional(),
  features: stringList(30, 300),
  deliverables: stringList(30, 300),
  technologies: stringList(30, 80),
  benefits: stringList(30, 500),
  techStack: z.array(techStackItem).max(20).optional(),
  processSteps: z.array(processStep).max(20).optional(),
  caseStudy: caseStudy.optional(),
  featuredImage: optionalUrl,
  imageAlt: z.string().trim().max(250).optional(),
  seoTitle: z.string().trim().max(200).optional(),
  seoDescription: z.string().trim().max(2000).optional(),
  ogImage: optionalUrl,
  status: statusField.optional(),
  sortOrder: z.coerce.number().int().min(0).max(100000).optional(),
});

export type ServiceInput = z.infer<typeof serviceSchema>;

// ------------------------- Projects -------------------------

export const projectSchema = z.object({
  slug: slugField,
  title: z.string().trim().min(1, "Title is required.").max(200),
  category: z.string().trim().min(1, "Category is required.").max(100),
  clientName: z.string().trim().max(200).optional(),
  industry: z.string().trim().max(150).optional(),
  summary: z.string().trim().min(1, "Summary is required.").max(5000),
  problem: z.string().trim().max(10000).optional(),
  strategy: z.string().trim().max(10000).optional(),
  results: stringList(30, 500),
  metrics: z.array(metricItem).max(20).optional(),
  outcomes: stringList(30, 300),
  thumbnail: optionalUrl,
  imageAlt: z.string().trim().max(250).optional(),
  screenshots: stringList(20, 500),
  tags: stringList(20, 60),
  demoUrl: optionalUrl,
  featured: z.boolean().optional(),
  status: statusField.optional(),
  sortOrder: z.coerce.number().int().min(0).max(100000).optional(),
  seoTitle: z.string().trim().max(200).optional(),
  seoDescription: z.string().trim().max(2000).optional(),
  ogImage: optionalUrl,
});

export type ProjectInput = z.infer<typeof projectSchema>;

// ------------------------- Blog -------------------------

export const blogCategorySchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(100),
  slug: slugField,
  description: z.string().trim().max(2000).optional(),
  hubSlug: z
    .string()
    .trim()
    .max(120)
    .regex(/^[a-z0-9-]+$/, "Hub slug may contain only lowercase letters, numbers and hyphens.")
    .optional(),
  sortOrder: z.coerce.number().int().min(0).max(100000).optional(),
});

export const blogTagSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(80),
  slug: slugField,
});

export const authorSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(150),
  role: z.string().trim().max(150).optional(),
  avatar: optionalUrl,
});

export const blogPostSchema = z.object({
  slug: slugField,
  title: z.string().trim().min(1, "Title is required.").max(250),
  excerpt: z.string().trim().min(1, "Excerpt is required.").max(2000),
  content: z.string().trim().min(1, "Content is required.").max(200000),
  coverImage: optionalUrl,
  imageAlt: z.string().trim().max(250).optional(),
  categoryId: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.string().min(1).max(150).optional()
  ),
  tagIds: z.array(z.string().min(1)).max(15).optional(),
  authorId: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.string().min(1).max(150).optional()
  ),
  status: statusField.optional(),
  publishedAt: z.preprocess(
    (v) => {
      if (v === "" || v === null || v === undefined) return undefined;
      // datetime-local inputs ("YYYY-MM-DDTHH:mm") carry no offset.
      if (
        typeof v === "string" &&
        /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}$/.test(v)
      ) {
        const d = new Date(v);
        return Number.isNaN(d.getTime()) ? v : d.toISOString();
      }
      return v;
    },
    z.string().datetime({ offset: true }).optional()
  ),
  readingMinutes: z.preprocess(
    (v) => (v === "" || (typeof v === "number" && Number.isNaN(v)) ? undefined : v),
    z.coerce.number().int().min(1).max(600).optional()
  ),
  seoTitle: z.string().trim().max(200).optional(),
  seoDescription: z.string().trim().max(2000).optional(),
  canonicalUrl: z
    .string()
    .trim()
    .max(500)
    .refine((v) => v === "" || v.startsWith("/") || v.startsWith("https://"),
      "Canonical URL must be a relative path or https URL.")
    .transform((v) => (v === "" ? undefined : v))
    .optional(),
  ogImage: optionalUrl,
});

export type BlogPostInput = z.infer<typeof blogPostSchema>;

// ------------------------- Testimonials -------------------------

export const testimonialSchema = z.object({
  clientName: z.string().trim().min(1, "Client name is required.").max(150),
  company: z.string().trim().max(200).optional(),
  role: z.string().trim().max(150).optional(),
  content: z.string().trim().min(1, "Content is required.").max(5000),
  avatar: optionalUrl,
  rating: z.coerce.number().int().min(1).max(5).optional(),
  featured: z.boolean().optional(),
  verified: z.boolean().optional(),
  status: statusField.optional(),
  sortOrder: z.coerce.number().int().min(0).max(100000).optional(),
});

export type TestimonialInput = z.infer<typeof testimonialSchema>;

// ------------------------- FAQs -------------------------

export const faqSchema = z.object({
  slug: slugField,
  question: z.string().trim().min(1, "Question is required.").max(300),
  answer: z.string().trim().min(1, "Answer is required.").max(5000),
  details: z.string().trim().max(50000).optional(),
  category: z.string().trim().max(100).optional(),
  serviceId: z.string().min(1).optional(),
  status: statusField.optional(),
  sortOrder: z.coerce.number().int().min(0).max(100000).optional(),
});

export type FaqInput = z.infer<typeof faqSchema>;

// ------------------------- Settings -------------------------

/** Whitelisted site-setting keys (fixed set — no arbitrary key creation). */
export const SITE_SETTING_KEYS = [
  "hero_headline",
  "hero_description",
  "hero_primary_cta_text",
  "hero_primary_cta_url",
  "hero_secondary_cta_text",
  "hero_secondary_cta_url",
  "contact_email",
  "contact_phone",
  "whatsapp_url",
  "social_twitter",
  "social_linkedin",
  "social_instagram",
  "social_facebook",
  "footer_about",
  "featured_services",
  "featured_projects",
  "featured_testimonials",
  "faq_selection",
] as const;

export type SiteSettingKey = (typeof SITE_SETTING_KEYS)[number];

export const settingsUpdateSchema = z.object({
  settings: z
    .array(
      z.object({
        key: z.enum(SITE_SETTING_KEYS),
        value: z.string().max(20000),
      })
    )
    .max(SITE_SETTING_KEYS.length),
});

/** Whitelisted homepage section keys (match rendered sections). */
export const HOMEPAGE_SECTION_KEYS = [
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
] as const;

export const homepageSectionsUpdateSchema = z.object({
  sections: z
    .array(
      z.object({
        key: z.enum(HOMEPAGE_SECTION_KEYS),
        isVisible: z.boolean(),
        sortOrder: z.coerce.number().int().min(0).max(100),
      })
    )
    .max(HOMEPAGE_SECTION_KEYS.length),
});
