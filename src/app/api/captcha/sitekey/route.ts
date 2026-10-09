import { ok } from "@/lib/api-helpers";

/**
 * GET /api/captcha/sitekey — exposes the PUBLIC Cloudflare Turnstile
 * site key to the contact widgets. Site keys are public by design
 * (they ship in page HTML); the secret never leaves the server.
 * Returns { siteKey: null } when unconfigured so forms degrade
 * gracefully to honeypot + rate-limit protection.
 */
export async function GET() {
  const siteKey = process.env.CLOUDFLARE_SITE_KEY?.trim() || null;
  return ok({ siteKey });
}
