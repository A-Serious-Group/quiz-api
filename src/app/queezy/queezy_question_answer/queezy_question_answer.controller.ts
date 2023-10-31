import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QueezyQuestionAnswerService } from './queezy_question_answer.service';
import { CreateQueezyQuestionAnswerDto } from './dto/create-queezy_question_answer.dto';
import { UpdateQueezyQuestionAnswerDto } from './dto/update-queezy_question_answer.dto';

@Controller('queezy-question-answer')
export class QueezyQuestionAnswerController {
  constructor(private readonly queezyQuestionAnswerService: QueezyQuestionAnswerService) {}

  @Post()
  create(@Body() createQueezyQuestionAnswerDto: CreateQueezyQuestionAnswerDto) {
    return this.queezyQuestionAnswerService.create(createQueezyQuestionAnswerDto);
  }

  @Get()
  findAll() {
    return this.queezyQuestionAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queezyQuestionAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueezyQuestionAnswerDto: UpdateQueezyQuestionAnswerDto) {
    return this.queezyQuestionAnswerService.update(+id, updateQueezyQuestionAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queezyQuestionAnswerService.remove(+id);
  }
}
