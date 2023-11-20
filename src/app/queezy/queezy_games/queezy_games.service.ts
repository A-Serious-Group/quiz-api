import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';
import { CreateQueezyGameDto } from './dto/create-queezy_game.dto';
import { UpdateQueezyGameDto } from './dto/update-queezy_game.dto';

@Injectable()
export class QueezyGamesService {
  constructor(private prismaDbService: PrismaDbConfigService) {}
  create(createQueezyGameDto: CreateQueezyGameDto) {
    return 'This action adds a new queezyGame';
  }

  findAll() {
    return `This action returns all queezyGames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queezyGame`;
  }

  update(id: number, updateQueezyGameDto: UpdateQueezyGameDto) {
    return `This action updates a #${id} queezyGame`;
  }

  remove(id: number) {
    return `This action removes a #${id} queezyGame`;
  }

  async findByUserId(userId: number): Promise<CreateQueezyGameDto[]> {
    try {
      const cadastros = await this.prismaDbService.users.findMany({
        where: { id_user: userId },
      });
      if (!cadastros || cadastros.length === 0) {
        throw new NotFoundException(`Cadastro with user ID ${userId} not found.`);
      }
      return cadastros;
    } catch (error) {
      throw new NotFoundException(`Cadastro with user ID ${userId} not found.`);
    }
  }
}
