/*
  Warnings:

  - Added the required column `updatedAt` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."accounts" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."sessions" ADD COLUMN     "ipAddress" TEXT,
ADD COLUMN     "userAgent" TEXT;
