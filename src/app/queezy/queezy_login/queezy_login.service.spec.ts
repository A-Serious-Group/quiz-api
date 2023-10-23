import { Test, TestingModule } from '@nestjs/testing';
import { QueezyLoginService } from './queezy_login.service';

describe('QueezyLoginService', () => {
  let service: QueezyLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyLoginService],
    }).compile();

    service = module.get<QueezyLoginService>(QueezyLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
