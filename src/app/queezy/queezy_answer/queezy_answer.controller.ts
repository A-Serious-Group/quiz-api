import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QueezyAnswerService } from './queezy_answer.service';
import { CreateQueezyAnswerDto } from './dto/create-queezy_answer.dto';
import { UpdateQueezyAnswerDto } from './dto/update-queezy_answer.dto';

@Controller('queezy')
export class QueezyAnswerController {
  constructor(private readonly queezyAnswerService: QueezyAnswerService) {}

  @Post('/api/queezy-answer')
  create(@Body() createQueezyAnswerDto: CreateQueezyAnswerDto) {
    return this.queezyAnswerService.create(createQueezyAnswerDto);
  }

  @Get()
  findAll() {
    return this.queezyAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queezyAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueezyAnswerDto: UpdateQueezyAnswerDto) {
    return this.queezyAnswerService.update(+id, updateQueezyAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queezyAnswerService.remove(+id);
  }
}
