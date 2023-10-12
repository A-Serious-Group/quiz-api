import { Global, Module } from '@nestjs/common';
import { PrismaDbConfigService } from './prisma-db-config/prisma-db-config.service';

@Global()
@Module({
  providers: [PrismaDbConfigService ],
  exports: [PrismaDbConfigService]
})
export class PrismaModule {}
