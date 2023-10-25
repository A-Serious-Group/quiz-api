import {Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaDbConfigService extends PrismaClient implements OnModuleInit {
  public prismaCLient = new PrismaClient()
    
    async onModuleInit() {
      await this.$connect()
    }
}
 