import { Injectable } from '@nestjs/common';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';
import { Question } from './dto/question.dto';

@Injectable()
export class QueezyQuestionService {
  constructor(private prismaDbService: PrismaDbConfigService) {}

  async createQuestion(dados: Question) {
    const question = await this.prismaDbService.questions.create({
      data: {
        question: dados.question,
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
