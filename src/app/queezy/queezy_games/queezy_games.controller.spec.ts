import { Test, TestingModule } from '@nestjs/testing';
import { QueezyGamesController } from './queezy_games.controller';
import { QueezyGamesService } from './queezy_games.service';

describe('QueezyGamesController', () => {
  let controller: QueezyGamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyGamesController],
      providers: [QueezyGamesService],
    }).compile();

    controller = module.get<QueezyGamesController>(QueezyGamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
