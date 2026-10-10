import { revalidatePath } from "next/cache";
import { hash } from "@node-rs/argon2";
import { requireAdmin } from "@/lib/admin-auth";
import {
  ok,
  fail,
  parseBody,
  requireDbConfigured,
  toApiError,
} from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { adminUserCreateSchema } from "@/lib/schemas/auth";

/**
 * GET/POST /api/admin/users — team management (ADMIN only).
 * There is deliberately no public registration: accounts can only be
 * created here (by an administrator) or via the one-time setup script.
 * Passwords are Argon2id-hashed server-side and never returned or logged.
 */

const safeSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  isActive: true,
  createdAt: true,
} as const;

export async function GET() {
  const auth = await requireAdmin();
  if (auth instanceof Response) return auth;
  const db = requireDbConfigured();
  if (db) return db;
  try {
    const users = await prisma.user.findMany({
      select: safeSelect,
      orderBy: { createdAt: "asc" },
    });
    return ok({ users, total: users.length });
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
    const body = adminUserCreateSchema.safeParse(parsed.data);
    if (!body.success) {
      return fail(body.error.issues.map((i) => i.message).join(" "), 422);
    }
    const email = body.data.email.toLowerCase();
    const existing = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });
    if (existing) {
      return fail("An account with this email already exists.", 409);
    }
    const user = await prisma.user.create({
      data: {
        email,
        name: body.data.name || null,
        passwordHash: await hash(body.data.password),
        role: body.data.role,
        isActive: true,
      },
      select: safeSelect,
    });
    revalidatePath("/admin");
    return ok({ user }, 201);
  } catch (err) {
    return toApiError(err);
  }
}
