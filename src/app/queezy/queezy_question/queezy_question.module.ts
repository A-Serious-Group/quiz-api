import { Module } from '@nestjs/common';
import { QueezyQuestionService } from './queezy_question.service';
import { QueezyQuestionController } from './queezy_question.controller';

@Module({
  controllers: [QueezyQuestionController],
  providers: [QueezyQuestionService]
})
export class QueezyQuestionModule {}
