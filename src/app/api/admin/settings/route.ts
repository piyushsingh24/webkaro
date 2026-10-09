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
  settingsUpdateSchema,
  SITE_SETTING_KEYS,
} from "@/lib/schemas/cms";

/** GET all settings as a key-value record (whitelisted keys only). */
export async function GET() {
  const auth = await requireEditor();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const rows = await prisma.siteSetting.findMany();
    const record: Record<string, string> = {};
    for (const key of SITE_SETTING_KEYS) record[key] = "";
    for (const row of rows) {
      if ((SITE_SETTING_KEYS as readonly string[]).includes(row.key)) {
        record[row.key] = row.value;
      }
    }
    return ok({ settings: record });
  } catch (err) {
    return toApiError(err);
  }
}

/** PUT bulk settings — ADMIN only (controls public content + links). */
export async function PUT(req: Request) {
  const auth = await requireAdmin();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const parsed = await parseBody(req);
    if ("response" in parsed) return parsed.response;
    const body = settingsUpdateSchema.safeParse(parsed.data);
    if (!body.success) {
      return fail(body.error.issues.map((i) => i.message).join(" "), 422);
    }
    await prisma.$transaction(
      body.data.settings.map((s) =>
        prisma.siteSetting.upsert({
          where: { key: s.key },
          create: { key: s.key, value: s.value },
          update: { value: s.value },
        })
      )
    );
    revalidatePath("/");
    revalidatePath("/sitemap.xml");
    return ok({ ok: true, updated: body.data.settings.length });
  } catch (err) {
    return toApiError(err);
  }
}
