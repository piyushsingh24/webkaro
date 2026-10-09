import { PrismaClient } from "@prisma/client";

/**
 * Singleton Prisma Client for the Next.js server runtime.
 * Prevents connection exhaustion during hot-reload in development while
 * reusing a single instance per serverless function in production.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
