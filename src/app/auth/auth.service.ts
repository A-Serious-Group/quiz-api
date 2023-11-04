import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaDbConfigService } from '../../prisma/prisma-db-config/prisma-db-config.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private prismaDbService: PrismaDbConfigService,
        private jwt: JwtService
    ) {}

    async login(dados: AuthDto): Promise<any>{
        try {
            const {email, password} = dados 
            const emailDoUsuario = await   this.prismaDbService.users.findFirst(
              {select: {email: true , password: true , id_user: true, permission_id: true, name: true, permissions: true},
              where: {email: email}
            }
            )
            if(!emailDoUsuario){
                throw new UnauthorizedException({mensagem: 'Email informado não existe'})
               }
              const authentique = await bcrypt.compare(password, emailDoUsuario.password)
              if(!authentique){
                 throw new UnauthorizedException({mensagem: 'Email ou senha incorreta, verifique os dados e tente novamente'})
              }
        
              const credentials = {
                      email: emailDoUsuario.email,
                      id_user: emailDoUsuario.id_user,
                      permission_id: emailDoUsuario.permission_id,
                      name: emailDoUsuario.name,
                      type_user: emailDoUsuario.permissions.name
              }
              const access_token =  this.jwt.sign(credentials, {secret: process.env.SECRET_KEY_JWT, expiresIn: "1d"})
              
              const userIsAuthentique = await this.prismaDbService.users.update(
                {
                  data: {access_token: access_token},
                  where: {id_user: credentials.id_user},
                  select: {access_token: true}
                }
                )
                const user = {
                  ...credentials,
                  access_token: userIsAuthentique.access_token
                }

            return  {mensagem: `Login realizado com sucesso`, user: user }

        }
        catch(error){
            return error
        }
    }
}
