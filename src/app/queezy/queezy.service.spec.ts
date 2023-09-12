import { Test, TestingModule } from '@nestjs/testing';
import { QueezyService } from './queezy.service';

describe('QueezyService', () => {
  let service: QueezyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyService],
    }).compile();

    service = module.get<QueezyService>(QueezyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
