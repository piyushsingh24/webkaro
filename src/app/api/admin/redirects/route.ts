import { z } from "zod";
import { requireEditor, requireAdmin } from "@/lib/admin-auth";
import {
  ok,
  fail,
  parseBody,
  requireDbConfigured,
  toApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { validateRedirect } from "@/lib/cms/redirects";

/**
 * GET/POST /api/admin/redirects — manual redirect manager.
 * Redirects are immutable pairs (no PATCH): delete + recreate to change.
 */

const redirectSchema = z.object({
  fromPath: z.string().trim().min(1, "Source path is required.").max(500),
  toPath: z.string().trim().min(1, "Destination path is required.").max(500),
});

export async function GET(req: Request) {
  const auth = await requireEditor();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const sp = new URL(req.url).searchParams;
    const q = (sp.get("q") ?? "").trim().slice(0, 200);
    const items = await prisma.redirect.findMany({
      where: q
        ? { OR: [{ fromPath: { contains: q } }, { toPath: { contains: q } }] }
        : {},
      orderBy: { createdAt: "desc" },
      take: 100,
    });
    return ok({ items, total: items.length });
  } catch (err) {
    return toApiError(err);
  }
}

export async function POST(req: Request) {
  const auth = await requireAdmin();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const parsed = await parseBody<unknown>(req);
    if ("response" in parsed) return parsed.response;
    const body = redirectSchema.safeParse(parsed.data);
    if (!body.success) {
      return fail(body.error.issues.map((i) => i.message).join(" "), 422);
    }
    const { fromPath, toPath } = body.data;
    const error = await validateRedirect(fromPath, toPath);
    if (error) return fail(error, 422);
    const existing = await prisma.redirect.findUnique({ where: { fromPath } });
    if (existing) {
      return fail("A redirect from this source already exists. Delete it first.", 409);
    }
    const item = await prisma.redirect.create({ data: { fromPath, toPath } });
    return ok({ item }, 201);
  } catch (err) {
    return toApiError(err);
  }
}
