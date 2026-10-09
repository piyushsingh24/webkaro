/**
 * One-time administrator setup script — Phase 1.
 *
 * Usage (PowerShell / bash):
 *   1. Fill in .env (DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD, ...)
 *   2. npx prisma migrate dev        (creates the `users` table)
 *   3. npm run admin:create
 *      (runs: node --env-file=.env scripts/create-admin.mjs)
 *
 * Security:
 * - Refuses to run if ANY admin already exists (one-time use).
 * - Password is hashed with Argon2id; never printed or logged.
 * - Reads credentials from environment only — no CLI args (avoids
 *   leaking the password into shell history).
 */

import { PrismaClient } from "@prisma/client";
import { hash } from "@node-rs/argon2";
import { z } from "zod";

// Standalone validation (mirrors adminCreateSchema in src/lib/schemas/auth.ts).
// Kept local so this script runs under plain node without a TS loader.
const adminCreateSchema = z.object({
  email: z.string().trim().email("ADMIN_EMAIL must be a valid email address."),
  password: z
    .string()
    .min(12, "ADMIN_PASSWORD must be at least 12 characters.")
    .max(128, "ADMIN_PASSWORD must be at most 128 characters."),
  name: z.string().trim().max(100).optional(),
});

const prisma = new PrismaClient();

function fail(message) {
  console.error(`[admin:create] ERROR: ${message}`);
  process.exitCode = 1;
}

async function main() {
  const parsed = adminCreateSchema.safeParse({
    email: process.env.ADMIN_EMAIL ?? "",
    password: process.env.ADMIN_PASSWORD ?? "",
    name: process.env.ADMIN_NAME,
  });
  if (!parsed.success) {
    fail(
      "Invalid ADMIN_EMAIL / ADMIN_PASSWORD. " +
        parsed.error.issues.map((i) => i.message).join(" ")
    );
    return;
  }

  const existingAdmins = await prisma.user.count({
    where: { role: "ADMIN" },
  });
  if (existingAdmins > 0) {
    fail(
      `Refusing to create another administrator (${existingAdmins} already exist). ` +
        "This script is one-time use only."
    );
    return;
  }

  const email = parsed.data.email.toLowerCase();
  const passwordHash = await hash(parsed.data.password);

  const user = await prisma.user.create({
    data: {
      email,
      name: parsed.data.name || null,
      passwordHash,
      role: "ADMIN",
      isActive: true,
    },
    select: { id: true, email: true },
  });

  console.log(`[admin:create] Administrator created: ${user.email} (id: ${user.id})`);
  console.log("[admin:create] Sign in at /admin/login. Remove ADMIN_PASSWORD from .env now.");
}

try {
  await main();
} catch (err) {
  // Never print credential material; Prisma errors contain none here.
  fail(err instanceof Error ? err.message : "Unknown failure.");
} finally {
  await prisma.$disconnect();
}
