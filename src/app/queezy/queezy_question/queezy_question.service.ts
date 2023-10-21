import { Injectable } from '@nestjs/common';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';
import { Question } from './dto/question.dto';
import { Response } from 'express';
@Injectable()
export class QueezyQuestionService {
    constructor(
        private prismaDbService: PrismaDbConfigService
    ){}

    async createQuestion(dados: Question, res: Response){
        const question = await  this.prismaDbService.questions.create({
            data: {
                question: dados.question
            }
        })
        if(question){
            return res.status(201).json({mensagem: 'Question create with success', data: question})
        }else{
            return res.status(400).json({mensagem: 'Error creating a question'})
}
    }
}
