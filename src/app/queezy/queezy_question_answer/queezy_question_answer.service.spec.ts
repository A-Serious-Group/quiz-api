import { Test, TestingModule } from '@nestjs/testing';
import { QueezyQuestionAnswerService } from './queezy_question_answer.service';

describe('QueezyQuestionAnswerService', () => {
  let service: QueezyQuestionAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyQuestionAnswerService],
    }).compile();

    service = module.get<QueezyQuestionAnswerService>(QueezyQuestionAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
