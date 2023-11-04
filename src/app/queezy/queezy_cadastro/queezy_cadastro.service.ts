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
      if(verificaSeExisteEmail?.email){
        return {mensagem: 'Não foi possível criar o cadastro, já existe esse email  vinculado a algum usuário, informe outro email'}
      }

      const existePermissao = await this.verificaSeExistePermissao()
      if(existePermissao == null){
        const permissaoDoUsuario: CreateQueezyCadastroDto = await this.criarPermissaoUsuario(dados)
        const {name, id_permission} = permissaoDoUsuario
        const novoUsuario = await this.prismaDbService.users.create({
            data: {
                name: dados.name,
                email: dados.email,
                password: await bcrypt.hash(dados.password, 10),
                permission_id: +id_permission,
              }
            });
            if(!novoUsuario){
                throw new Error('Ocorreu algum erro interno ao cadastrar sua conta, tente novamente em alguns  instantes') 
              }
              await this.prismaDbService.redefination_password.create(
                  {
                      data: {user_id: novoUsuario.id_user}
                    }
                  )
                  
                  return { mensagem: 'Usuário cadastrado com sucesso', user: novoUsuario };
                }else{
                  const permissao = await this.verificaSeExistePermissao()
                  const novoUsuario = await this.cadastrarUsuario({...dados, id_permission: permissao.id_permission})

                  return {mensagem: 'Usuário cadastrado com sucesso', user: novoUsuario}

                }
    } catch (error) {
      console.log(error)
      throw new Error('Ocorreu algum erro interno ao criar uma conta');
    }
  }
  public criarPermissaoUsuario = async (dados: CreateQueezyCadastroDto ): Promise<any> => {
        if(!dados){
          return {mensagem: 'Erro interno'}
        }
        const permissao = await this.prismaDbService.permissions.create(
          {
            data: {name: 'ADMIN'},
            select: {name: true, id_permission: true}
          }
          )
    return permissao
  }

  public verificaSeExistePermissao = async () => {
    const [permissao] = await this.prismaDbService.permissions.findMany()
    return !permissao ? null : permissao
  }

  public cadastrarUsuario = async (dados: CreateQueezyCadastroDto) => {
    if(!dados){
      return {mensagem: 'Erro interno'}
    }

    const usuario = await this.prismaDbService.users.create({
      data: {
        name: dados.name,
                email: dados.email,
                password: await bcrypt.hash(dados.password, 10),
                permission_id: +dados.id_permission, 
      }
    })
    await this.prismaDbService.redefination_password.create(
      {
          data: {user_id: usuario.id_user}
        }
      )
      return usuario
  }
} 
