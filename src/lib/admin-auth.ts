import { getServerSession } from "next-auth";
import type { Role } from "@prisma/client";
import { authOptions } from "@/lib/auth";

export type AdminSession = {
  id: string;
  email: string;
  role: Role;
};

async function currentAdmin(): Promise<AdminSession | null> {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user?.id || (user.role !== "ADMIN" && user.role !== "EDITOR")) {
    return null;
  }
  return { id: user.id, email: user.email ?? "", role: user.role };
}

/**
 * Server-side authorization for admin API handlers and Server Components.
 * Usage:
 *   const auth = await requireAdmin();
 *   if (auth instanceof Response) return auth; // 401/403 already answered
 * Never trust role info from the browser — role always comes from the JWT.
 */
export async function requireAdmin(): Promise<AdminSession | Response> {
  const admin = await currentAdmin();
  if (!admin) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }
  if (admin.role !== "ADMIN") {
    return Response.json(
      { error: "Forbidden. Administrator role required." },
      { status: 403 }
    );
  }
  return admin;
}

/** ADMIN or EDITOR. Editors can create/update drafts but cannot publish,
 *  unpublish, or delete (enforced per-handler via canPublish/canDelete). */
export async function requireEditor(): Promise<AdminSession | Response> {
  const admin = await currentAdmin();
  if (!admin) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }
  return admin;
}

/** Only ADMIN may change publication status or site settings. */
export function canPublish(role: Role): boolean {
  return role === "ADMIN";
}

/** Only ADMIN may delete records. */
export function canDelete(role: Role): boolean {
  return role === "ADMIN";
}
