import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QueezyGamesService } from './queezy_games.service';
import { CreateQueezyGameDto } from './dto/create-queezy_game.dto';
import { UpdateQueezyGameDto } from './dto/update-queezy_game.dto';

@Controller('queezy')
export class QueezyGamesController {
  constructor(private readonly queezyGamesService: QueezyGamesService) {}

  @Post()
  create(@Body() createQueezyGameDto: CreateQueezyGameDto) {
    return this.queezyGamesService.create(createQueezyGameDto);
  }

  @Get('/api/games')
  findAll() {
    return this.queezyGamesService.findAll();
  }

  @Get('/api/game/one/:id')
  findById(@Param('id') id: number) {
    return this.queezyGamesService.getById(id);
  }

  @Get('/api/get-id-user/:id_users')
  findOne(@Param('id_users') ids: string) {
    const usersIds = ids.split(',').map(Number)
    return this.queezyGamesService.getUsers(usersIds);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueezyGameDto: UpdateQueezyGameDto) {
    return this.queezyGamesService.update(+id, updateQueezyGameDto);
  }

  @Delete('/api/game/:id')
  remove(@Param('id') id: string) {
    return this.queezyGamesService.remove(+id);
  }
}
