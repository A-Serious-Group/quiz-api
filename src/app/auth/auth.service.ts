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
            const verifica = await   this.prismaDbService.users.findFirst(
              {select: {email: true , password: true , id_user: true, permission_id: true, name: true, Permissions: true},
              where: {email: email}
            }
            )
            if(!verifica){
                throw new UnauthorizedException()
               }
              const authentique = await bcrypt.compare(password, verifica.password)
              if(!authentique){
                 throw new UnauthorizedException()
              }
        
              const credentials = {
                email: verifica.email,
                id_user: verifica.id_user,
                permission_id: verifica.permission_id,
                name: verifica.name,
                type_user: verifica.Permissions.name
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
              
            return  {mensagem: `Login realizado com sucesso, ${user.name} está logado`, user: user }

        }
        catch(error){
            return error
        }

        return 
    }
}
