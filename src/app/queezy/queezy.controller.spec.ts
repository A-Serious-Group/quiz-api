import { Test, TestingModule } from '@nestjs/testing';
import { QueezyController } from './queezy.controller';

describe('QueezyController', () => {
  let controller: QueezyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyController],
    }).compile();

    controller = module.get<QueezyController>(QueezyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
