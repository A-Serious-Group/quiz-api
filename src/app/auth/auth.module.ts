import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
@Global()
@Module({
  providers: [
    AuthService,
     JwtService
    ],
  controllers: [
    AuthController
  ],
  imports: [
    JwtModule.register(
      {
        secret: process.env.SECRET_KEY_JWT,
        signOptions: {expiresIn: "1d"}
      }
    )
  ]
})
export class AuthModule {}
