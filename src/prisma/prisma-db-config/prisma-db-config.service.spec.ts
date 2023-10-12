import { Test, TestingModule } from '@nestjs/testing';
import { PrismaDbConfigService } from './prisma-db-config.service';

describe('PrismaDbConfigService', () => {
  let service: PrismaDbConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaDbConfigService],
    }).compile();

    service = module.get<PrismaDbConfigService>(PrismaDbConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
