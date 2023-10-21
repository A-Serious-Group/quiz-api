import { Test, TestingModule } from '@nestjs/testing';
import { QueezyQuestionController } from './queezy_question.controller';
import { QueezyQuestionService } from './queezy_question.service';

describe('QueezyQuestionController', () => {
  let controller: QueezyQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyQuestionController],
      providers: [QueezyQuestionService],
    }).compile();

    controller = module.get<QueezyQuestionController>(QueezyQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
