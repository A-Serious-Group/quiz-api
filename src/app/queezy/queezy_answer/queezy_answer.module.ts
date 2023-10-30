import { Module } from '@nestjs/common';
import { QueezyAnswerService } from './queezy_answer.service';
import { QueezyAnswerController } from './queezy_answer.controller';

@Module({
  controllers: [QueezyAnswerController],
  providers: [QueezyAnswerService],
})
export class QueezyAnswerModule {}
