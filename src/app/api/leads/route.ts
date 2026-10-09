import { headers } from "next/headers";
import { leadSubmitSchema } from "@/lib/schemas/leads";
import { checkRateLimit } from "@/lib/rate-limit";
import { createLead } from "@/lib/crm/leads";
import {
  notifyNewLead,
  forwardToWeb3Forms,
  verifyTurnstile,
} from "@/lib/notify";
import {
  ok,
  fail,
  parseBody,
  requireDbConfigured,
  toApiError,
} from "@/lib/api-helpers";

/**
 * POST /api/leads — public enquiry submission.
 *
 * Protections (in order): rate limit → origin check → honeypot/time-trap
 * (silent fake success) → zod validation → Turnstile CAPTCHA (strict when
 * CLOUDFLARE_SECRET_KEY is set) → transactional save (+ dedup) →
 * post-commit notifications (fail-open).
 * Success is returned ONLY after the lead is persisted.
 */

const IP_LIMIT = 5;
const IP_WINDOW_MS = 10 * 60 * 1000;
const MIN_FILL_MS = 2500;

async function clientIp(): Promise<string> {
  const h = await headers();
  return (
    h.get("x-forwarded-for")?.split(",")[0].trim() ||
    h.get("x-real-ip") ||
    "unknown"
  );
}

async function originAllowed(): Promise<boolean> {
  const origin = (await headers()).get("origin");
  if (!origin) return true; // non-browser clients (curl, native) send none
  try {
    const host = new URL(origin).hostname.toLowerCase();
    return (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host === "webkaro.in" ||
      host.endsWith(".webkaro.in") ||
      host.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const db = requireDbConfigured();
  if (db) return db;

  const ip = await clientIp();
  const ipRate = checkRateLimit(`lead:${ip}`, IP_LIMIT, IP_WINDOW_MS);
  if (!ipRate.allowed) {
    return fail("Too many enquiries. Please try again later.", 429);
  }
  if (!(await originAllowed())) {
    return fail("Forbidden.", 403);
  }

  const parsed = await parseBody<unknown>(req);
  if ("response" in parsed) return parsed.response;
  const raw = parsed.data as Record<string, unknown>;

  // Spam traps: lie with success so bots learn nothing.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return ok({ ok: true });
  }
  if (
    typeof raw.filledAt === "number" &&
    Date.now() - raw.filledAt < MIN_FILL_MS
  ) {
    return ok({ ok: true });
  }

  const body = leadSubmitSchema.safeParse(raw);
  if (!body.success) {
    return fail(body.error.issues.map((i) => i.message).join(" "), 422);
  }
  const data = body.data;

  const human = await verifyTurnstile(data.turnstileToken);
  if (!human) {
    return fail("Verification failed. Please complete the captcha and try again.", 422);
  }

  try {
    const result = await createLead(data);

    // Post-commit only: notifications can never invalidate the saved lead.
    const lead = { ...data, id: result.lead.id, createdAt: new Date() };
    await notifyNewLead(lead);
    void forwardToWeb3Forms({
      name: data.name,
      email: data.email ?? "",
      phone: data.phone ?? "",
      message: [
        `Company: ${data.companyName ?? "—"}`,
        `Service: ${data.serviceInterest ?? "—"}`,
        `Budget: ${data.budgetRange ?? "—"}`,
        `Source: ${data.source ?? "other"} (${data.landingPage ?? "?"})`,
        ``,
        data.projectDescription ?? "",
      ].join("\n"),
      subject: `New enquiry from Webkaro.in (${data.source ?? "other"})`,
      from_name: "Webkaro CRM",
    });

    return ok({ ok: true });
  } catch (err) {
    return toApiError(err);
  }
}
