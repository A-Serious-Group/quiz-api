import { Injectable } from '@nestjs/common';
import { PrismaDbConfigService } from '../../prisma/prisma-db-config/prisma-db-config.service';


@Injectable()
export class QueezyService {
    constructor( private prismaDbConfigService: PrismaDbConfigService
    ){}

    async createQuestion(dados: any) {
        const question = await this.prismaDbConfigService.questions.create({data: {
            question: dados.question
        }})
        console.log(question,'question que criou no banco')
        return question
    }

}
