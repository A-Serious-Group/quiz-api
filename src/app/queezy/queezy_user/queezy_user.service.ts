import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateQueezyUserDto } from './dto/create-queezy_user.dto';
import { UpdateQueezyUserDto } from './dto/update-queezy_user.dto';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class QueezyUserService {
  constructor(private prismaDbService: PrismaDbConfigService) {}
  async create(dados: CreateQueezyUserDto) {
    // const jwt = new JwtService()
    // const {email, password} = dados
    // const verifica = await   this.prismaDbService.users.findFirst(
    //   {select: {email: true , password: true , id_user: true, permission_id: true, name: true, Permissions: true},
    //   where: {email: email}
    // }
    // )
    // if(!verifica){
    //   return {mensagem: 'Email ou senha está incorreta'}
    //    }
    //   const authentique = await bcrypt.compare(password, verifica.password)
    //   if(!authentique){
    //     return {mensagem: 'Senha incorreta, digite novamente sua senha'}
    //   }

    //   const credentials = {
    //     email: verifica.email,
    //     id_user: verifica.id_user,
    //     permission_id: verifica.permission_id,
    //     name: verifica.name,
    //     type_user: verifica.Permissions.name
    //   }
    //   const access_token =  jwt.sign(credentials, {secret: process.env.SECRET_KEY_JWT, expiresIn: "1d"})

    //   const userIsAuthentique = await this.prismaDbService.users.update(
    //     {
    //       data: {access_token: access_token},
    //       where: {id_user: credentials.id_user},
    //       select: {access_token: true}
    //     }
    //     )
    //     const user = {
    //       ...credentials,
    //       access_token: userIsAuthentique.access_token
    //     }

    // return  {mensagem: `Login realizado com sucesso, ${user.name} está logado`, user: user }
    return;
  }

  async findAll() {
    try {
      let usuarios: CreateQueezyUserDto[] = [];
      const users = await this.prismaDbService.users.findMany();
      if (!users.length)
        throw new NotFoundException({
          mensagem: 'Não foi encontrado nenhum registro',
        });
      for (let user of users) {
        usuarios.push(user);
      }
      return { mensagem: 'Users listed with success', users: usuarios };
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {}

  async update(id: number, updateQueezyUserDto: UpdateQueezyUserDto) {
    try {
      const user = await this.prismaDbService.users.update({
        data: updateQueezyUserDto,
        where: { id_user: id },
        select: {name: true , email: true, id_user: true }
      });
      return {mensagem: 'User update with success', user: user}
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} queezyUser`;
  }
}
