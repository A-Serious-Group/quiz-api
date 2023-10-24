import { Module } from '@nestjs/common';
import { QueezyController } from './queezy.controller';
import { QueezyService } from './queezy.service';
import { QueezyQuestionModule } from './queezy_question/queezy_question.module';
import { QueezyLoginModule } from './queezy_login/queezy_login.module';
import { QueezyCadastroModule } from './queezy_cadastro/queezy_cadastro.module';
import { QueezyUserModule } from './queezy_user/queezy_user.module';

@Module({
  imports: [
      QueezyQuestionModule,
      QueezyLoginModule,
      QueezyCadastroModule,
      QueezyUserModule
    ],
  controllers: [QueezyController],
  providers: [QueezyService],
})
export class QueezyModule {}
