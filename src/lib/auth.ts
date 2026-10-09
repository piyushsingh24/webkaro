import { headers } from "next/headers";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify } from "@node-rs/argon2";
import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/lib/schemas/auth";
import { checkRateLimit } from "@/lib/rate-limit";

/**
 * Auth.js (NextAuth v4) configuration — Credentials provider, JWT sessions.
 *
 * Security notes:
 * - Passwords are verified with Argon2id (@node-rs/argon2, OWASP defaults).
 * - Failures return a single generic message (no account enumeration);
 *   inactive accounts fail exactly like wrong passwords.
 * - Sessions are stateless JWTs in HTTP-only cookies (no session table).
 * - Role changes take effect on next login (role is baked into the JWT).
 */

const GENERIC_ERROR = "Invalid email or password.";

// 5 attempts per 10 minutes, keyed by client IP + normalized email.
const LOGIN_LIMIT = 5;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;

async function clientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return h.get("x-real-ip") ?? "unknown";
}

export const authOptions: AuthOptions = {
  // Required: NEXTAUTH_SECRET must be set (see .env.example).
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    // Admin sessions expire after 8 hours of issuance.
    maxAge: 8 * 60 * 60,
    updateAge: 2 * 60 * 60,
  },
  jwt: {
    maxAge: 8 * 60 * 60,
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "Admin credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse({
          email: credentials?.email ?? "",
          password: credentials?.password ?? "",
        });
        if (!parsed.success) {
          throw new Error(GENERIC_ERROR);
        }

        const email = parsed.data.email.toLowerCase();
        const rate = checkRateLimit(
          `login:${await clientIp()}:${email}`,
          LOGIN_LIMIT,
          LOGIN_WINDOW_MS
        );
        if (!rate.allowed) {
          throw new Error(
            `Too many login attempts. Try again in ${rate.retryAfterSeconds} seconds.`
          );
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.isActive) {
          // Same message for missing, inactive, or wrong-password accounts.
          throw new Error(GENERIC_ERROR);
        }

        let valid = false;
        try {
          valid = await verify(user.passwordHash, parsed.data.password);
        } catch {
          valid = false;
        }
        if (!valid) {
          throw new Error(GENERIC_ERROR);
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // `user` is present only at sign-in: bake id + role into the token.
      if (user) {
        token.sub = user.id;
        token.role = (user as { role: "ADMIN" | "EDITOR" }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.sub ?? "") as string;
        session.user.role = token.role ?? "ADMIN";
      }
      return session;
    },
  },
};
