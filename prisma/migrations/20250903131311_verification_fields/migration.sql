/*
  Warnings:

  - You are about to drop the column `expires` on the `verification_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `verification_tokens` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[value]` on the table `verification_tokens` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identifier,value]` on the table `verification_tokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expiresAt` to the `verification_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `verification_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."verification_tokens_identifier_token_key";

-- DropIndex
DROP INDEX "public"."verification_tokens_token_key";

-- AlterTable
ALTER TABLE "public"."verification_tokens" DROP COLUMN "expires",
DROP COLUMN "token",
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_value_key" ON "public"."verification_tokens"("value");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_value_key" ON "public"."verification_tokens"("identifier", "value");
