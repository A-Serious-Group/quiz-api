import { Injectable } from '@nestjs/common';
import {knex} from '../../../database/knex';
import { PrismaDbConfigService } from 'src/prisma/prisma-db-config/prisma-db-config.service';

@Injectable()
export class QueezyService {
    constructor( private prismaDbConfigService: PrismaDbConfigService
    ){}

}
