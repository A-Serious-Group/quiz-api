import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QueezyService } from './queezy.service';

@Controller('queezy')
export class QueezyController {
    constructor(private readonly queezyService: QueezyService ) {}
    @Get() 
    findAll() {}

    @Post()
    create(@Body() dados: any) {}

    @Get(':id')
    findOne(@Param('id') id: number){}

}
