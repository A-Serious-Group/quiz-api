import { Module } from '@nestjs/common';
import { QueezyRedefinationPasswordService } from './queezy_redefination_password.service';
import { QueezyRedefinationPasswordController } from './queezy_redefination_password.controller';

@Module({
  controllers: [QueezyRedefinationPasswordController],
  providers: [QueezyRedefinationPasswordService],
})
export class QueezyRedefinationPasswordModule {}
