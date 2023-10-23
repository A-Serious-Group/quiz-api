import { Module } from '@nestjs/common';
import { QueezyLoginService } from './queezy_login.service';
import { QueezyLoginController } from './queezy_login.controller';

@Module({
  controllers: [QueezyLoginController],
  providers: [QueezyLoginService],
})
export class QueezyLoginModule {}
