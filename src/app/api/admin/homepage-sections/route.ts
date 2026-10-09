import { revalidatePath } from "next/cache";
import { requireEditor, requireAdmin } from "@/lib/admin-auth";
import {
  ok,
  fail,
  parseBody,
  requireDbConfigured,
  toApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import {
  homepageSectionsUpdateSchema,
  HOMEPAGE_SECTION_KEYS,
} from "@/lib/schemas/cms";

/** GET homepage section visibility + ordering. */
export async function GET() {
  const auth = await requireEditor();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const rows = await prisma.homepageSection.findMany({
      orderBy: { sortOrder: "asc" },
    });
    const byKey = new Map(rows.map((r) => [r.key, r]));
    const sections = HOMEPAGE_SECTION_KEYS.map((key, i) => {
      const row = byKey.get(key);
      return {
        key,
        isVisible: row?.isVisible ?? true,
        sortOrder: row?.sortOrder ?? i,
      };
    });
    return ok({ sections });
  } catch (err) {
    return toApiError(err);
  }
}

/** PUT section visibility/ordering — ADMIN only. */
export async function PUT(req: Request) {
  const auth = await requireAdmin();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const parsed = await parseBody(req);
    if ("response" in parsed) return parsed.response;
    const body = homepageSectionsUpdateSchema.safeParse(parsed.data);
    if (!body.success) {
      return fail(body.error.issues.map((i) => i.message).join(" "), 422);
    }
    await prisma.$transaction(
      body.data.sections.map((s) =>
        prisma.homepageSection.upsert({
          where: { key: s.key },
          create: { key: s.key, isVisible: s.isVisible, sortOrder: s.sortOrder },
          update: { isVisible: s.isVisible, sortOrder: s.sortOrder },
        })
      )
    );
    revalidatePath("/");
    return ok({ ok: true });
  } catch (err) {
    return toApiError(err);
  }
}
