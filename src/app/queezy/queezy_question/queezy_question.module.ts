import { Module } from '@nestjs/common';
import { QueezyQuestionService } from './queezy_question.service';
import { QueezyQuestionController } from './queezy_question.controller';
import { UploadModule } from '../../upload/upload.module';

@Module({
  imports: [UploadModule],
  controllers: [QueezyQuestionController],
  providers: [QueezyQuestionService]
})
export class QueezyQuestionModule {}
