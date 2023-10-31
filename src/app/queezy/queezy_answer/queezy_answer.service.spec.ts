import { Test, TestingModule } from '@nestjs/testing';
import { QueezyAnswerService } from './queezy_answer.service';

describe('QueezyAnswerService', () => {
  let service: QueezyAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyAnswerService],
    }).compile();

    service = module.get<QueezyAnswerService>(QueezyAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
