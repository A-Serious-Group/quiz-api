import { Module } from '@nestjs/common';
import { QueezyController } from './queezy.controller';
import { QueezyService } from './queezy.service';
import { QueezyQuestionModule } from './queezy_question/queezy_question.module';

@Module({
    imports: [QueezyQuestionModule],
    controllers: [QueezyController],
    providers: [QueezyService]
})
export class QueezyModule {}
