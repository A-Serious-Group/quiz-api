import { Injectable } from '@nestjs/common';

@Injectable()
export class QueezyService {
   async getHelloWord(): Promise<string>{
        return `HELLO WORLD`
    }
}
