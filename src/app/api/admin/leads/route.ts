import { requireEditor } from "@/lib/admin-auth";
import {
  ok,
  fail,
  requireDbConfigured,
  toApiError,
} from "@/lib/api-helpers";
import { parsePagination } from "@/lib/cms/db";
import { countLeads, listLeads, LEAD_STATUSES } from "@/lib/crm/leads";
import { LEAD_SOURCES } from "@/lib/schemas/leads";

/** GET /api/admin/leads — paginated, searchable, filterable lead list. */
export async function GET(req: Request) {
  const auth = await requireEditor();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const sp = new URL(req.url).searchParams;
    const q = (sp.get("q") ?? "").trim().slice(0, 200);
    const statusParam = sp.get("status");
    const status = LEAD_STATUSES.includes(statusParam as never)
      ? (statusParam as (typeof LEAD_STATUSES)[number])
      : undefined;
    const service = sp.get("service") || undefined;
    const sourceParam = sp.get("source");
    const source = (LEAD_SOURCES as readonly string[]).includes(sourceParam ?? "")
      ? sourceParam!
      : undefined;
    const sortParam = sp.get("sort");
    const sort =
      sortParam === "oldest" || sortParam === "followup" ? sortParam : "newest";
    const { page, perPage, skip } = parsePagination(sp);

    const [items, total] = await Promise.all([
      listLeads({ q, status, service, source, sort, skip, take: perPage }),
      countLeads({ q, status, service, source }),
    ]);
    return ok({ items, total, page, perPage });
  } catch (err) {
    return toApiError(err);
  }
}

export async function POST() {
  // Leads are created via the public POST /api/leads only.
  return fail("Use POST /api/leads to submit an enquiry.", 405);
}
