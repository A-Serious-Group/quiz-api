import { Test, TestingModule } from '@nestjs/testing';
import { QueezyCadastroService } from './queezy_cadastro.service';

describe('QueezyCadastroService', () => {
  let service: QueezyCadastroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyCadastroService],
    }).compile();

    service = module.get<QueezyCadastroService>(QueezyCadastroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
