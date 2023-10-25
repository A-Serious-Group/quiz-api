import { Test, TestingModule } from '@nestjs/testing';
import { QueezyLoginController } from './queezy_login.controller';
import { QueezyLoginService } from './queezy_login.service';

describe('QueezyLoginController', () => {
  let controller: QueezyLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyLoginController],
      providers: [QueezyLoginService],
    }).compile();

    controller = module.get<QueezyLoginController>(QueezyLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
