import { PrismaClient } from "@prisma/client";

// Ensure a single PrismaClient instance across Next.js hot reloads
// in development to prevent exhausting database connections.
//   In production, a new instance per serverless function may be fine.

declare global {
   var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
