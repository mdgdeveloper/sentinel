/*
  Warnings:

  - Added the required column `updatedAt` to the `verification_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."verification_tokens" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
