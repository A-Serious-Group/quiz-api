import { Test, TestingModule } from '@nestjs/testing';
import { QueezyUserController } from './queezy_user.controller';
import { QueezyUserService } from './queezy_user.service';

describe('QueezyUserController', () => {
  let controller: QueezyUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyUserController],
      providers: [QueezyUserService],
    }).compile();

    controller = module.get<QueezyUserController>(QueezyUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
