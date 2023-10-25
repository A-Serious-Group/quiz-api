import { Module } from '@nestjs/common';
import { QueezyUserService } from './queezy_user.service';
import { QueezyUserController } from './queezy_user.controller';

@Module({
  controllers: [QueezyUserController],
  providers: [QueezyUserService],
})
export class QueezyUserModule {}
