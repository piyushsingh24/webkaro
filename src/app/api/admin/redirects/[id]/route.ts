import { requireAdmin } from "@/lib/admin-auth";
import { ok, fail, requireDbConfigured, toApiError } from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";

/** DELETE /api/admin/redirects/[id] — ADMIN only. */
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
    try {
      await prisma.redirect.delete({ where: { id } });
    } catch {
      return fail("Redirect not found.", 404);
    }
    return ok({ ok: true });
  } catch (err) {
    return toApiError(err);
  }
}
