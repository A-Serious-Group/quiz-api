import { Injectable } from '@nestjs/common';
import { CreateQueezyGameDto } from './dto/create-queezy_game.dto';
import { UpdateQueezyGameDto } from './dto/update-queezy_game.dto';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';

@Injectable()
export class QueezyGamesService {
  constructor(
    private prismaDbService: PrismaDbConfigService,
  ){}
  create(createQueezyGameDto: CreateQueezyGameDto) {
    return 'This action adds a new queezyGame';
  }

  async findAll() {
    const games = await this.prismaDbService.games.findMany({
      include: {
        users: true,
      },
    });
  
    return { games };
  }

  async getUsers(userIds: number[]) {
    const users = await this.prismaDbService.games.findMany({
      where: {
        user_id: {
          in: userIds,
        },
      },
    });
    return {users}
  }

  async getById(id: number) {
    const game = await this.prismaDbService.games.findUnique({
      where: { id_game: id },
    });
    return { game }
  }

  update(id: number, updateQueezyGameDto: UpdateQueezyGameDto) {
    return `This action updates a #${id} queezyGame`;
  }

  async remove(id: number) {
    try {

      const questionsToDelete = await this.prismaDbService.questions.findMany({
        where: {
          game_id: id,
        },
      });

      await Promise.all(
        questionsToDelete.map(async (question) => {
          const answersToDelete = await this.prismaDbService.answers.findMany({
            where: {
              question_id: question.id_question,
            },
          });
          

          await Promise.all(
            answersToDelete.map(async (answer) => {
              await this.prismaDbService.answers.delete({
                where: {
                  id_answer: answer.id_answer,
                },
              });
            })
          );

          await this.prismaDbService.questions.delete({
            where: {
              id_question: question.id_question,
            },
          });
        })
      );

      const deletedQueezyGame = await this.prismaDbService.games.delete({
        where: {
          id_game: id,
        },
      });
  
      if (deletedQueezyGame) {
        return `Successfully removed queezyGame with ID ${id}`;
      } else {
        return `QueezyGame with ID ${id} not found`;
      }
    } catch (error) {
        throw error;
    }
  }
}

