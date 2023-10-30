import { Test, TestingModule } from '@nestjs/testing';
import { QueezyQuestionAnswerController } from './queezy_question_answer.controller';
import { QueezyQuestionAnswerService } from './queezy_question_answer.service';

describe('QueezyQuestionAnswerController', () => {
  let controller: QueezyQuestionAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueezyQuestionAnswerController],
      providers: [QueezyQuestionAnswerService],
    }).compile();

    controller = module.get<QueezyQuestionAnswerController>(QueezyQuestionAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
