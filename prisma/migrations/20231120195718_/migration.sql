/*
  Warnings:

  - Added the required column `question_id` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_id` to the `Question_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_user_id` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Permissions" DROP CONSTRAINT "Permissions_id_permission_fkey";

-- DropIndex
DROP INDEX "Games_user_id_key";

-- DropIndex
DROP INDEX "Users_permission_id_key";

-- AlterTable
ALTER TABLE "Answers" ADD COLUMN     "answers_correct" BOOLEAN DEFAULT false,
ADD COLUMN     "question_id" INTEGER NOT NULL,
ALTER COLUMN "answers" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Question_answers" ADD COLUMN     "game_id" INTEGER NOT NULL,
ALTER COLUMN "position" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Questions" ADD COLUMN     "imagem" TEXT,
ADD COLUMN     "question_user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "access_token" TEXT,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "Redefination_password" (
    "id_redefination_pass" SERIAL NOT NULL,
    "codigo" VARCHAR(10),
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Redefination_password_pkey" PRIMARY KEY ("id_redefination_pass")
);

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_question_user_id_fkey" FOREIGN KEY ("question_user_id") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question_answers" ADD CONSTRAINT "Question_answers_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Games"("id_game") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id_question") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "Permissions"("id_permission") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Redefination_password" ADD CONSTRAINT "Redefination_password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
