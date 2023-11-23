import { Injectable } from '@nestjs/common';
import { CreateQueezyQuestionAnswerDto } from './dto/create-queezy_question_answer.dto';
import { UpdateQueezyQuestionAnswerDto } from './dto/update-queezy_question_answer.dto';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';

@Injectable()
export class QueezyQuestionAnswerService {
  constructor(private prismaDbService: PrismaDbConfigService) {}
  async create(data: CreateQueezyQuestionAnswerDto) {

    const game = await this.prismaDbService.games.create({
      data: {
        name: data.game_name,
        url: 'www',
        user_id: data.user_id,
        restartOnError: data.restartOnError
      },
    });

    data.question.forEach(async element => {
      const question = await this.prismaDbService.questions.create({
        data: {
          question: element.question,
          question_user_id: data.user_id,
          game_id: game.id_game
        },
      });
      for (let index = 0; index < element.answers.length; index++) {
        await this.prismaDbService.answers.create({
          data: {
            answers: element.answers[index].name,
            question_id: question.id_question,
            answers_correct: element.answers[index].correct, 
          },
        });
      }
    });

    return "Question, Anwser and Game Create success";
  }

  findAll() {
    return `This action returns all queezyQuestionAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queezyQuestionAnswer`;
  }

  update(id: number, updateQueezyQuestionAnswerDto: UpdateQueezyQuestionAnswerDto) {
    return `This action updates a #${id} queezyQuestionAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} queezyQuestionAnswer`;
  }
}
