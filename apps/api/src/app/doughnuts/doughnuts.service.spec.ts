import { Test, TestingModule } from '@nestjs/testing';
import { DoughnutsService } from './doughnuts.service';

describe('DoughnutsService', () => {
  let service: DoughnutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoughnutsService],
    }).compile();

    service = module.get<DoughnutsService>(DoughnutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
