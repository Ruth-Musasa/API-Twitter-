-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "profil" TEXT;