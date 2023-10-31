import { Test, TestingModule } from '@nestjs/testing';
import { QueezyRedefinationPasswordService } from './queezy_redefination_password.service';

describe('QueezyRedefinationPasswordService', () => {
  let service: QueezyRedefinationPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueezyRedefinationPasswordService],
    }).compile();

    service = module.get<QueezyRedefinationPasswordService>(QueezyRedefinationPasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
