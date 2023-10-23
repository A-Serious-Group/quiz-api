import { Injectable } from '@nestjs/common';
import { PrismaDbConfigService } from '../../prisma/prisma-db-config/prisma-db-config.service';


@Injectable()
export class QueezyService {
    constructor( private prismaDbConfigService: PrismaDbConfigService){}
}
