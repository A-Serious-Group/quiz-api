import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateQueezyCadastroDto } from './dto/create-queezy_cadastro.dto';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class QueezyCadastroService {
  constructor(private prismaDbService: PrismaDbConfigService) {}
  async create(dados: CreateQueezyCadastroDto) {

    try {
      const [verificaSeExisteEmail] = await this.prismaDbService.users.findMany({select: {email: true}, where: {email: dados.email}})
      console.log(verificaSeExisteEmail,'se existe email ou não')
      if(verificaSeExisteEmail?.email){
        return {mensagem: 'Não foi possível criar o cadastro, já existe esse email  vinculado a algum usuário, informe outro email'}
      }
      const newUser = await this.prismaDbService.users.create({
        data: {
          name: dados.name,
          email: dados.email,
          password: await bcrypt.hash(dados.password, 10),
          permission_id: +dados.permission_id,
        },
      });
      console.log(newUser, 'novo usuario')
      if(!newUser){
        throw new Error('Ocorreu algum erro interno ao cadastrar sua conta, tente novamente em alguns  instantes') 
      }
      await this.prismaDbService.redefination_password.create(
        {
          data: {user_id: newUser.id_user}
        }
      )

      return { mensagem: 'Usuário cadastrado com sucesso', user: newUser };
    } catch (error) {
      console.log(error)
      throw new Error('Ocorreu algum erro interno ao criar uma conta');
    }
  }
}
