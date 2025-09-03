/*
  Warnings:

  - You are about to drop the column `providerAccountId` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerId]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `providerId` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."accounts_provider_providerAccountId_key";

-- AlterTable
ALTER TABLE "public"."accounts" DROP COLUMN "providerAccountId",
ADD COLUMN     "providerId" TEXT NOT NULL,
ALTER COLUMN "provider" SET DEFAULT 'credential';

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerId_key" ON "public"."accounts"("provider", "providerId");
