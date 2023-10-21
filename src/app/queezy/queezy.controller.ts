import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QueezyService } from './queezy.service';

@Controller('queezy')
export class QueezyController {
    constructor(private readonly queezyService: QueezyService ) {}
    @Get() 
    findAll() {}

    @Post('/api/create-question/queezy')
    create(@Body() dados: any) {
        console.log( dados.question)
        this.queezyService.createQuestion(dados)
    }

    @Get(':id')
    findOne(@Param('id') id: number){}

}
