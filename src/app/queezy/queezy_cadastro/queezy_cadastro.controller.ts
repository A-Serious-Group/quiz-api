import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QueezyCadastroService } from './queezy_cadastro.service';
import { CreateQueezyCadastroDto } from './dto/create-queezy_cadastro.dto';
import { UpdateQueezyCadastroDto } from './dto/update-queezy_cadastro.dto';

@Controller('queezy')
export class QueezyCadastroController {
  constructor(private readonly queezyCadastroService: QueezyCadastroService) {}

  @Post('/api/queezy/cadastrar')
  create(@Body() createQueezyCadastroDto: CreateQueezyCadastroDto) {
    return this.queezyCadastroService.create(createQueezyCadastroDto);
  }

}
