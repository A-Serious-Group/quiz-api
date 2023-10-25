import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/api/auth-login')
    async signIn(@Body() login: AuthDto){
       return await this.authService.login(login)
    }
}
