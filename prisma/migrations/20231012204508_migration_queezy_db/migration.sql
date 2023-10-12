-- CreateTable
CREATE TABLE "Questions" (
    "id_question" SERIAL NOT NULL,
    "question" VARCHAR(255) NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id_question")
);

-- CreateTable
CREATE TABLE "Question_answers" (
    "id_question_answers" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer_id" INTEGER NOT NULL,
    "position" VARCHAR(15) NOT NULL,

    CONSTRAINT "Question_answers_pkey" PRIMARY KEY ("id_question_answers")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id_answer" SERIAL NOT NULL,
    "answers" VARCHAR(15) NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id_answer")
);

-- CreateTable
CREATE TABLE "Users" (
    "id_user" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Permissions" (
    "id_permission" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Permissions_pkey" PRIMARY KEY ("id_permission")
);

-- CreateTable
CREATE TABLE "Games" (
    "id_game" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "restartOnError" BOOLEAN,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id_game")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_permission_id_key" ON "Users"("permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "Games_user_id_key" ON "Games"("user_id");

-- AddForeignKey
ALTER TABLE "Question_answers" ADD CONSTRAINT "Question_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id_question") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question_answers" ADD CONSTRAINT "Question_answers_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answers"("id_answer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permissions" ADD CONSTRAINT "Permissions_id_permission_fkey" FOREIGN KEY ("id_permission") REFERENCES "Users"("permission_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
