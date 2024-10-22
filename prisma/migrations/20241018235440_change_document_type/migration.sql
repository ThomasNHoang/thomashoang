/*
  Warnings:

  - Made the column `document` on table `Note` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Note" ALTER COLUMN "document" SET NOT NULL,
ALTER COLUMN "document" SET DATA TYPE TEXT;
