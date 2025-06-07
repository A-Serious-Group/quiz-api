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
          game_id: game.id_game,
          imagem: element.image
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

  async update(id: number, updateQueezyQuestionAnswerDto: UpdateQueezyQuestionAnswerDto) {
    // Update game if game_name or restartOnError is provided
    if (updateQueezyQuestionAnswerDto.game_name || updateQueezyQuestionAnswerDto.restartOnError) {
      await this.prismaDbService.games.update({
        where: { id_game: id },
        data: {
          name: updateQueezyQuestionAnswerDto.game_name,
          restartOnError: updateQueezyQuestionAnswerDto.restartOnError,
        },
      });
    }

    // Update questions and answers if provided
    if (updateQueezyQuestionAnswerDto.question) {
      // Get all existing questions for this game
      const existingQuestions = await this.prismaDbService.questions.findMany({
        where: { game_id: id },
        select: { id_question: true }
      });

      // Get IDs of questions in the update request
      const updatedQuestionIds = updateQueezyQuestionAnswerDto.question
        .filter(q => q.id_question)
        .map(q => q.id_question);

      // Find questions to delete (exist in DB but not in request)
      const questionsToDelete = existingQuestions
        .filter(q => !updatedQuestionIds.includes(q.id_question))
        .map(q => q.id_question);

      // Delete questions that are no longer in the request
      if (questionsToDelete.length > 0) {
        // First delete all answers for these questions
        await this.prismaDbService.answers.deleteMany({
          where: {
            question_id: {
              in: questionsToDelete
            }
          }
        });

        // Then delete the questions
        await this.prismaDbService.questions.deleteMany({
          where: {
            id_question: {
              in: questionsToDelete
            }
          }
        });
      }

      // Process the questions in the request
      for (const element of updateQueezyQuestionAnswerDto.question) {
        let question;
        
        if (element.id_question) {
          // Update existing question
          question = await this.prismaDbService.questions.update({
            where: {
              id_question: element.id_question,
            },
            data: {
              question: element.question,
              imagem: element.imagem,
            },
          });
        } else {
          // Create new question
          question = await this.prismaDbService.questions.create({
            data: {
              question: element.question,
              question_user_id: element.question_user_id || 1,
              game_id: id,
              imagem: element.image || element.imagem || null
            },
          });
        }

        // Handle answers
        if (element.answer_fk) {
          // Delete existing answers for this question
          await this.prismaDbService.answers.deleteMany({
            where: { question_id: question.id_question },
          });

          // Create new answers
          for (const answer of element.answer_fk) {
            await this.prismaDbService.answers.create({
              data: {
                answers: answer.answers,
                question_id: question.id_question,
                answers_correct: answer.answers_correct,
              },
            });
          }
        } else if (element.answers) {
          // Create new answers for new question
          for (const answer of element.answers) {
            await this.prismaDbService.answers.create({
              data: {
                answers: answer.name,
                question_id: question.id_question,
                answers_correct: answer.correct,
              },
            });
          }
        }
      }
    }

    return "Game, Questions and Answers updated successfully";
  }

  remove(id: number) {
    return `This action removes a #${id} queezyQuestionAnswer`;
  }
}
