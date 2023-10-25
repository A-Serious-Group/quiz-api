import { Global, Module } from '@nestjs/common';
import { PrismaDbConfigService } from './prisma-db-config/prisma-db-config.service';
// import { QueezyService } from 'src/app/queezy/queezy.service';

@Global()
@Module({
  // imports: [PrismaDbConfigService],
  providers: [PrismaDbConfigService ],
  exports: [PrismaDbConfigService]
})
export class PrismaModule {}
