import { Test, TestingModule } from '@nestjs/testing';
import { QueezyQuestionService } from './queezy_question.service';

describe('QueezyQuestionService', () => {
  let service: QueezyQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyQuestionService],
    }).compile();

    service = module.get<QueezyQuestionService>(QueezyQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
