import { Test, TestingModule } from '@nestjs/testing';
import { QueezyUserService } from './queezy_user.service';

describe('QueezyUserService', () => {
  let service: QueezyUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyUserService],
    }).compile();

    service = module.get<QueezyUserService>(QueezyUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
