import { Controller, Post, Body, Res, Get, Put, Param, Delete } from '@nestjs/common';
import { QueezyQuestionService } from './queezy_question.service';
import { Question } from './dto/question.dto';

@Controller('queezy')
export class QueezyQuestionController {
  constructor(private readonly queezyQuestionService: QueezyQuestionService) {}
  @Post('/api/question')
  create(@Body() dados: Question) {
   return  this.queezyQuestionService.createQuestion(dados);
  }

  @Get('/api/question')
  findAll() {
    return this.queezyQuestionService.selectAllQuestion();
  }

  @Put('/api/question/:id')
  update(@Param('id') id_question: number, @Body() dados: Question) {
    return this.queezyQuestionService.updateQuestion(+id_question, dados);
  }

  @Get('/api/question/:id')
  selectById(@Param('id') id_question: number){
    return this.queezyQuestionService.selectQuestionById(+id_question)
  }

  @Delete('/api/question/:id')
  delete(@Param('id') id_question: number){
    return this.queezyQuestionService.deleteQuestion(+id_question)
  }
}
