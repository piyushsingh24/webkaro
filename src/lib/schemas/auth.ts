import { z } from "zod";

/** Login input validation — shared by the login form and the server. */
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .max(254, "Email is too long."),
  password: z
    .string()
    .min(1, "Password is required.")
    .max(128, "Password is too long."),
});

export type LoginInput = z.infer<typeof loginSchema>;

/** Admin creation validation — used by the one-time setup script. */
export const adminCreateSchema = z.object({
  email: z.string().trim().email("ADMIN_EMAIL must be a valid email address."),
  password: z
    .string()
    .min(12, "ADMIN_PASSWORD must be at least 12 characters.")
    .max(128, "ADMIN_PASSWORD must be at most 128 characters."),
  name: z.string().trim().max(100).optional(),
});

/**
 * Team-member creation validation — used by POST /api/admin/users.
 * Same password policy as the setup script, plus an explicit role.
 */
export const adminUserCreateSchema = adminCreateSchema.extend({
  name: z.string().trim().min(1, "Name is required.").max(100),
  role: z.enum(["ADMIN", "EDITOR"]),
});

export type AdminUserCreateInput = z.infer<typeof adminUserCreateSchema>;
