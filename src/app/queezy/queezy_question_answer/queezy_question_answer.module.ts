import { Module } from '@nestjs/common';
import { QueezyQuestionAnswerService } from './queezy_question_answer.service';
import { QueezyQuestionAnswerController } from './queezy_question_answer.controller';

@Module({
  controllers: [QueezyQuestionAnswerController],
  providers: [QueezyQuestionAnswerService],
})
export class QueezyQuestionAnswerModule {}
