import { Controller, Get } from '@nestjs/common';
import { QueezyService } from './queezy.service';

@Controller('queezy')
export class QueezyController {
    constructor(private readonly queezyService: QueezyService ) {}
    @Get('/api/hello-world') 
    chamarHelloWorld() {
        return this.queezyService.getHelloWord()
    }
}
