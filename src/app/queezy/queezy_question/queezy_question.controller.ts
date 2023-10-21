import { Controller, Post, Body, Res } from '@nestjs/common';
import { QueezyQuestionService } from './queezy_question.service';
import { Question } from './dto/question.dto';
import { Response } from 'express';

@Controller('queezy')
export class QueezyQuestionController {
  constructor(private readonly queezyQuestionService: QueezyQuestionService) {}
  @Post('/api/question')
  create(@Body() dados: Question, @Res() res: Response){
    this.queezyQuestionService.createQuestion(dados, res)
  }
}
