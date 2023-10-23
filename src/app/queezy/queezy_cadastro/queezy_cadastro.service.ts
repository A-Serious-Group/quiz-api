import { Injectable } from '@nestjs/common';
import { CreateQueezyCadastroDto } from './dto/create-queezy_cadastro.dto';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class QueezyCadastroService {
  constructor(
    private prismaDbService: PrismaDbConfigService
  ){}
  async create(dados: CreateQueezyCadastroDto) {
    console.log(dados)
    const newUser = await this.prismaDbService.users.create({
      data: {
        name: dados.name,
        email: dados.email,
        password: await bcrypt.hash(dados.password, 10),
        permission_id: dados.permission_id
      }

    })
    return {mensagem: 'Usuário cadastrado com sucesso', user: newUser}
   
  }
}
