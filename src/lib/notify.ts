import { getSiteSettings } from "@/lib/cms/settings";

/**
 * Lead notifications — fail-open by design.
 *
 * - The lead is ALWAYS saved before this runs; email failures never
 *   invalidate a saved lead and never change the API response.
 * - Provider: Resend via its HTTPS API (no SDK dependency). Active only
 *   when RESEND_API_KEY is set; otherwise notifications are skipped and
 *   the skip is logged server-side.
 * - Visitor acknowledgement is opt-in (LEAD_SEND_ACK=true).
 * - Optional Web3Forms forwarding preserves the legacy pipeline behind
 *   WEB3FORMS_FORWARD_ENABLED (default off — avoids duplicate emails).
 */

type LeadSummary = {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  companyName?: string | null;
  serviceInterest?: string | null;
  projectDescription?: string | null;
  budgetRange?: string | null;
  source?: string | null;
  landingPage?: string | null;
  createdAt: Date;
};

function log(...args: unknown[]) {
  // eslint-disable-next-line no-console
  console.log("[lead-notify]", ...args);
}

export function isNotifyConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM);
}

async function sendViaResend(to: string, subject: string, text: string): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM,
        to: [to],
        subject,
        text,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      log(`Resend failed (${res.status}):`, body.slice(0, 300));
      return false;
    }
    return true;
  } catch (err) {
    log("Resend error:", err instanceof Error ? err.message : err);
    return false;
  }
}

function adminText(lead: LeadSummary): string {
  const lines = [
    `New enquiry on Webkaro.in (id: ${lead.id})`,
    ``,
    `Name: ${lead.name}`,
    `Email: ${lead.email ?? "—"}`,
    `Phone: ${lead.phone ?? "—"}`,
    `Company: ${lead.companyName ?? "—"}`,
    `Service: ${lead.serviceInterest ?? "—"}`,
    `Budget: ${lead.budgetRange ?? "—"}`,
    `Source: ${lead.source ?? "—"} (${lead.landingPage ?? "unknown page"})`,
    ``,
    `Message:`,
    `${(lead.projectDescription ?? "—").slice(0, 2000)}`,
    ``,
    `Manage: https://www.webkaro.in/admin/leads/${lead.id}`,
  ];
  return lines.join("\n");
}

/** Notify the business inbox + optional visitor ack. Never throws. */
export async function notifyNewLead(lead: LeadSummary): Promise<{ emailed: boolean }> {
  if (!isNotifyConfigured()) {
    log(`skipped (RESEND_API_KEY/RESEND_FROM unset) for lead ${lead.id}`);
    return { emailed: false };
  }

  let inbox = process.env.LEAD_NOTIFY_EMAIL?.trim();
  if (!inbox) {
    try {
      const settings = await getSiteSettings();
      inbox = settings.contact_email || "info@webkaro.in";
    } catch {
      inbox = "info@webkaro.in";
    }
  }

  const emailed = await sendViaResend(
    inbox,
    `New enquiry: ${lead.name}${lead.serviceInterest ? ` — ${lead.serviceInterest}` : ""}`,
    adminText(lead)
  );

  if (process.env.LEAD_SEND_ACK === "true" && lead.email) {
    const ack = await sendViaResend(
      lead.email,
      "We received your enquiry — Webkaro",
      `Hi ${lead.name},\n\nThanks for reaching out to Webkaro. Our team will get back to you within 24 hours.\n\n— Team Webkaro`
    );
    log(`ack to ${lead.email}: ${ack ? "sent" : "failed"}`);
  }

  return { emailed };
}

/** Legacy pipeline forwarding (default off). Failures are logged only. */
export async function forwardToWeb3Forms(payload: Record<string, unknown>): Promise<void> {
  if (process.env.WEB3FORMS_FORWARD_ENABLED !== "true") return;
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    log("Web3Forms forward skipped (no access key).");
    return;
  }
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...payload, access_key: accessKey }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean };
    log(`Web3Forms forward: ${json.success ? "ok" : "failed"}`);
  } catch (err) {
    log("Web3Forms forward error:", err instanceof Error ? err.message : err);
  }
}

/** Verify a Cloudflare Turnstile token.
 *
 * Policy (strict when configured):
 * - CLOUDFLARE_SECRET_KEY unset → accept (honeypot + time-trap + rate
 *   limits remain the active protection; forms render no widget).
 * - Secret set → token REQUIRED and must verify; missing/invalid tokens
 *   are rejected. A verification outage fails OPEN (accepts) so genuine
 *   enquiries are never lost because Cloudflare is unreachable.
 */
export async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.CLOUDFLARE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token }),
      }
    );
    const json = (await res.json()) as { success?: boolean };
    return json.success === true;
  } catch {
    return true;
  }
}
