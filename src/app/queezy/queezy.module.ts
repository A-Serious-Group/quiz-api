import { Module } from '@nestjs/common';
import { QueezyController } from './queezy.controller';
import { QueezyService } from './queezy.service';
import { QueezyQuestionModule } from './queezy_question/queezy_question.module';
import { QueezyLoginModule } from './queezy_login/queezy_login.module';
import { QueezyCadastroModule } from './queezy_cadastro/queezy_cadastro.module';
import { QueezyUserModule } from './queezy_user/queezy_user.module';
import { QueezyAnswerModule } from './queezy_answer/queezy_answer.module';
import { QueezyGamesModule } from './queezy_games/queezy_games.module';
import { QueezyQuestionAnswerModule } from './queezy_question_answer/queezy_question_answer.module';
import { QueezyRedefinationPasswordModule } from './queezy_redefination_password/queezy_redefination_password.module';

@Module({
  imports: [
      QueezyQuestionModule,
      QueezyLoginModule,
      QueezyCadastroModule,
      QueezyUserModule,
      QueezyAnswerModule,
      QueezyGamesModule,
      QueezyQuestionAnswerModule,
      QueezyRedefinationPasswordModule
    ],
  controllers: [QueezyController],
  providers: [QueezyService],
})
export class QueezyModule {}
