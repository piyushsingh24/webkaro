import { revalidatePath } from "next/cache";
import { requireEditor, requireAdmin, canPublish } from "@/lib/admin-auth";
import {
  ok,
  fail,
  parseBody,
  requireDbConfigured,
  toApiError,
} from "@/lib/api-helpers";
import {
  getLeadById,
  changeLeadStatus,
  addLeadNote,
  setLeadFollowUp,
  assignLead,
  updateLeadDetails,
  deleteLead,
} from "@/lib/crm/leads";
import { leadActionSchema } from "@/lib/schemas/leads";

/** GET /api/admin/leads/[id] — full lead incl. private activity timeline. */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const auth = await requireEditor();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const { id } = await ctx.params;
    const lead = await getLeadById(id);
    if (!lead) return fail("Lead not found.", 404);
    return ok({ lead });
  } catch (err) {
    return toApiError(err);
  }
}

/**
 * PATCH /api/admin/leads/[id] — discriminated admin actions.
 * Roles: status/assign/delete = ADMIN; note/followup/update = EDITOR+.
 */
export async function PATCH(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const auth = await requireEditor();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const { id } = await ctx.params;
    const parsed = await parseBody<unknown>(req);
    if ("response" in parsed) return parsed.response;
    const body = leadActionSchema.safeParse(parsed.data);
    if (!body.success) {
      return fail(body.error.issues.map((i) => i.message).join(" "), 422);
    }
    const action = body.data;
    const isAdmin = canPublish(auth.role);

    switch (action.action) {
      case "status": {
        if (!isAdmin) return fail("Only administrators can change lead status.", 403);
        const updated = await changeLeadStatus(id, action.to, auth.id);
        if (!updated) return fail("Lead not found.", 404);
        break;
      }
      case "note": {
        const updated = await addLeadNote(id, action.note, auth.id);
        if (!updated) return fail("Lead not found.", 404);
        break;
      }
      case "followup": {
        const updated = await setLeadFollowUp(
          id,
          action.followUpAt ? new Date(action.followUpAt) : null,
          auth.id
        );
        if (!updated) return fail("Lead not found.", 404);
        break;
      }
      case "assign": {
        if (!isAdmin) return fail("Only administrators can assign leads.", 403);
        const updated = await assignLead(id, action.assignedToId ?? null, auth.id);
        if (!updated) return fail("Lead not found.", 404);
        if (updated === "invalid-assignee") {
          return fail("Assignee not found or inactive.", 422);
        }
        break;
      }
      case "update": {
        const updated = await updateLeadDetails(id, action.data);
        if (!updated) return fail("Lead not found.", 404);
        break;
      }
    }

    revalidatePath("/admin");
    revalidatePath("/admin/leads");
    revalidatePath(`/admin/leads/${id}`);
    const lead = await getLeadById(id);
    return ok({ lead });
  } catch (err) {
    return toApiError(err);
  }
}

/** DELETE /api/admin/leads/[id] — ADMIN only, explicit confirmation in UI. */
export async function DELETE(
  _req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const { id } = await ctx.params;
    const deleted = await deleteLead(id);
    if (!deleted) return fail("Lead not found.", 404);
    revalidatePath("/admin");
    revalidatePath("/admin/leads");
    return ok({ ok: true });
  } catch (err) {
    return toApiError(err);
  }
}
