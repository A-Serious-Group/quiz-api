import { Test, TestingModule } from '@nestjs/testing';
import { QueezyAnswerController } from './queezy_answer.controller';
import { QueezyAnswerService } from './queezy_answer.service';

describe('QueezyAnswerController', () => {
  let controller: QueezyAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyAnswerController],
      providers: [QueezyAnswerService],
    }).compile();

    controller = module.get<QueezyAnswerController>(QueezyAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
