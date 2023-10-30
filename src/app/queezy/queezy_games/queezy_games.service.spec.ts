import { Test, TestingModule } from '@nestjs/testing';
import { QueezyGamesService } from './queezy_games.service';

describe('QueezyGamesService', () => {
  let service: QueezyGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyGamesService],
    }).compile();

    service = module.get<QueezyGamesService>(QueezyGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
