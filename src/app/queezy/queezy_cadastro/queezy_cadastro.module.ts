import { Module } from '@nestjs/common';
import { QueezyCadastroService } from './queezy_cadastro.service';
import { QueezyCadastroController } from './queezy_cadastro.controller';

@Module({
  controllers: [QueezyCadastroController],
  providers: [QueezyCadastroService],
})
export class QueezyCadastroModule {}
