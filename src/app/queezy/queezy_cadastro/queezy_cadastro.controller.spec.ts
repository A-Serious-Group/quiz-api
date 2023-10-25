import { Test, TestingModule } from '@nestjs/testing';
import { QueezyCadastroController } from './queezy_cadastro.controller';
import { QueezyCadastroService } from './queezy_cadastro.service';

describe('QueezyCadastroController', () => {
  let controller: QueezyCadastroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyCadastroController],
      providers: [QueezyCadastroService],
    }).compile();

    controller = module.get<QueezyCadastroController>(QueezyCadastroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
