import { Test, TestingModule } from '@nestjs/testing';
import { QueezyRedefinationPasswordController } from './queezy_redefination_password.controller';
import { QueezyRedefinationPasswordService } from './queezy_redefination_password.service';

describe('QueezyRedefinationPasswordController', () => {
  let controller: QueezyRedefinationPasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyRedefinationPasswordController],
      providers: [QueezyRedefinationPasswordService],
    }).compile();

    controller = module.get<QueezyRedefinationPasswordController>(QueezyRedefinationPasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
