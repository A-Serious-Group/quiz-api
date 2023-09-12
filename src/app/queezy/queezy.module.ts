import { Module } from '@nestjs/common';
import { QueezyController } from './queezy.controller';
import { QueezyService } from './queezy.service';

@Module({
    imports: [],
    controllers: [QueezyController],
    providers: [QueezyService]
})
export class QueezyModule {}
