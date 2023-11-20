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
    const games = await this.prismaDbService.games.findMany();
    return {games}
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

  update(id: number, updateQueezyGameDto: UpdateQueezyGameDto) {
    return `This action updates a #${id} queezyGame`;
  }

  remove(id: number) {
    return `This action removes a #${id} queezyGame`;
  }
}

