import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/rate-limit";
import { ok, fail } from "@/lib/api-helpers";

/**
 * POST /api/metrics/whatsapp-click — logs-only WhatsApp click beacon.
 * A click is NOT a lead: nothing is persisted to the CRM here. The log
 * line gives source-page attribution in server logs.
 */
export async function POST(req: Request) {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const rate = checkRateLimit(`wa:${ip}`, 30, 60 * 1000);
  if (!rate.allowed) return fail("Too many requests.", 429);

  let page = "unknown";
  try {
    const body = (await req.json()) as { page?: string };
    if (typeof body.page === "string") page = body.page.slice(0, 500);
  } catch {
    /* body optional */
  }

  // eslint-disable-next-line no-console
  console.log(`[whatsapp-click] page=${page} ip=${ip}`);
  return ok({ ok: true });
}
