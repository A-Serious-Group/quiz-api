import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { QueezyGamesService } from './queezy_games.service';
import { CreateQueezyGameDto } from './dto/create-queezy_game.dto';
import { UpdateQueezyGameDto } from './dto/update-queezy_game.dto';

@Controller('queezy-games')
export class QueezyGamesController {
  constructor(private readonly queezyGamesService: QueezyGamesService) {}

  @Post()
  create(@Body() createQueezyGameDto: CreateQueezyGameDto) {
    return this.queezyGamesService.create(createQueezyGameDto);
  }

  @Get()
  findAll() {
    return this.queezyGamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queezyGamesService.findOne(+id);
  }

  @Get(':user_id')
  findByUserId(@Param('id') id: string) {
    return this.queezyGamesService.findOne(+id);
  }

  // @Get('by-user')
  // async findByUserId(@Param('user_id') user_id: string): Promise<any> {
    

  //   console.log("CHEGAMOS");
  //   // return this.queezyGamesService.findByUserId(userIdAsNumber);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueezyGameDto: UpdateQueezyGameDto) {
    return this.queezyGamesService.update(+id, updateQueezyGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queezyGamesService.remove(+id);
  }
}
