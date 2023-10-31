import { Injectable } from '@nestjs/common';
import { CreateQueezyGameDto } from './dto/create-queezy_game.dto';
import { UpdateQueezyGameDto } from './dto/update-queezy_game.dto';

@Injectable()
export class QueezyGamesService {
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
}
