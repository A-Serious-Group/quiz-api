import { Injectable } from '@nestjs/common';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';
import { Question } from './dto/question.dto';

@Injectable()
export class QueezyQuestionService {
  constructor(private prismaDbService: PrismaDbConfigService) {}

  async createQuestion(dados: Question) {
    console.log(dados);
    const question = await this.prismaDbService.questions.create({
      data: {
        question: dados.question,
        question_user_id: dados.question_id_user,
      },
    });
    const selectQuestion = await this.prismaDbService.questions.findFirst({
      where: { id_question: question.id_question },
    });
    console.log(selectQuestion, 'select question');

    const answer = await this.prismaDbService.answers.create({
      data: { answers: dados.answer, question_id: selectQuestion.id_question , answers_correct: dados?.answers_correct },
    });
    await this.prismaDbService.question_answers.create({
      data: {
        question_id: selectQuestion.id_question,
        answer_id: answer.id_answer,
        position: dados.position,
      },
    });

    if (question) {
      return {
        status: 201,
        mensagem: 'Question create with success',
        data: question,
      };
    } else {
      return { status: 400, mensagem: 'Error creating a question' };
    }
  }

  async selectAllQuestion() {
    const question = await this.prismaDbService.questions.findMany();
    return { mensagem: 'Question listed with success', questions: question };
  }

  async updateQuestion(id: number, dados: Question) {
    const question = await this.prismaDbService.questions.update({
      where: { id_question: id },
      data: dados,
    });
    return { question: question };
  }

  async selectQuestionById(id: number) {
    const question = await this.prismaDbService.questions.findUnique({
      where: { id_question: id },
    });
    if (!question) {
      return { status: 404, mensagem: 'No data found for the query' };
    } else {
      return {
        status: 200,
        mensagem: 'Question listed with success',
        question: question,
      };
    }
  }

  async deleteQuestion(id_question: number) {
    const question = await this.selectQuestionById(id_question);
    if (question.question) {
      await this.prismaDbService.questions.delete({
        where: { id_question: id_question },
      });
      return { status: 200, mensagem: 'Question deleted with success' };
    } else {
      return { status: 404, mensagem: 'No data found for the query' };
    }
  }
}
