import { z } from "zod";

/**
 * Lead CRM validation — public submission + admin actions.
 * Server is authoritative: contact-method requirement, lengths, formats,
 * and the admin mass-assignment whitelist are all enforced here.
 */

export const LEAD_SOURCES = [
  "contact-page",
  "homepage-quote",
  "service-detail",
  "project-detail",
  "blog-cta",
  "faq-cta",
  "whatsapp-followup",
  "other",
] as const;

export const LEAD_STATUSES = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "PROPOSAL_SENT",
  "WON",
  "LOST",
] as const;

const shortText = (max: number) =>
  z.string().trim().max(max).transform((v) => (v === "" ? undefined : v)).optional();

const attributionUrl = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .refine(
      (v) =>
        v === "" ||
        v.startsWith("/") ||
        v.startsWith("http://") ||
        v.startsWith("https://"),
      "Invalid URL format."
    )
    .transform((v) => (v === "" ? undefined : v))
    .optional();

const emailField = z
  .string()
  .trim()
  .max(254, "Email is too long.")
  .refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Invalid email address.")
  .transform((v) => (v === "" ? undefined : v.toLowerCase()))
  .optional();

// Indian + international digits, spaces, +, -, brackets. Validated loosely;
// normalization keeps only digits and a leading +.
const phoneField = z
  .string()
  .trim()
  .max(30, "Phone number is too long.")
  .refine((v) => v === "" || /^[+()\-.\s\d]{7,30}$/.test(v), "Invalid phone number.")
  .transform((v) => (v === "" ? undefined : v.replace(/(?!^\+)[^\d]/g, "")))
  .optional();

export function normalizePhone(phone: string): string {
  return phone.replace(/(?!^\+)[^\d]/g, "");
}

/** Public enquiry submission. At least one contact method is required. */
export const leadSubmitSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required.").max(150, "Name is too long."),
    email: emailField,
    phone: phoneField,
    companyName: shortText(200),
    serviceInterest: shortText(150),
    projectDescription: z.string().trim().max(5000, "Description is too long.").optional(),
    budgetRange: shortText(100),
    preferredContactMethod: z.enum(["EMAIL", "PHONE", "WHATSAPP"]).default("EMAIL"),
    source: z.enum(LEAD_SOURCES).default("other"),
    landingPage: attributionUrl(500),
    referrer: attributionUrl(500),
    utmSource: shortText(150),
    utmMedium: shortText(150),
    utmCampaign: shortText(150),
    turnstileToken: z.string().max(2000).optional(),
    // Spam traps (must stay empty / plausible — checked in the handler).
    website: z.string().max(200).optional(),
    filledAt: z.coerce.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.email && !data.phone) {
      ctx.addIssue({
        code: "custom",
        message: "Provide at least an email address or a phone number.",
        path: ["email"],
      });
    }
  });

export type LeadSubmitInput = z.infer<typeof leadSubmitSchema>;

// ------------------------- Admin actions -------------------------

export const leadStatusSchema = z.enum([
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "PROPOSAL_SENT",
  "WON",
  "LOST",
]);

/** Discriminated admin mutation — mass assignment is impossible by shape. */
export const leadActionSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("status"),
    to: leadStatusSchema,
  }),
  z.object({
    action: z.literal("note"),
    note: z.string().trim().min(1, "Note is required.").max(5000),
  }),
  z.object({
    action: z.literal("followup"),
    // ISO datetime or empty string to clear.
    followUpAt: z
      .preprocess(
        (v) => (v === "" || v === null ? undefined : v),
        z.string().datetime({ offset: true }).optional()
      ),
  }),
  z.object({
    action: z.literal("assign"),
    // Empty string unassigns.
    assignedToId: z.preprocess(
      (v) => (v === "" ? undefined : v),
      z.string().min(1).max(191).optional()
    ),
  }),
  z.object({
    action: z.literal("update"),
    data: z
      .object({
        name: z.string().trim().min(1).max(150).optional(),
        email: emailField,
        phone: phoneField,
        companyName: shortText(200),
        serviceInterest: shortText(150),
        projectDescription: z.string().trim().max(5000).optional(),
        budgetRange: shortText(100),
        preferredContactMethod: z.enum(["EMAIL", "PHONE", "WHATSAPP"]).optional(),
        source: z.enum(LEAD_SOURCES).optional(),
      })
      .strict(),
  }),
]);

export type LeadActionInput = z.infer<typeof leadActionSchema>;
