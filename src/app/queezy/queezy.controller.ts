import  {Controller} from '@nestjs/common';
import { QueezyService } from './queezy.service';

@Controller('queezy')
export class QueezyController {
    constructor(private readonly queezyService: QueezyService ) {}
  
}
