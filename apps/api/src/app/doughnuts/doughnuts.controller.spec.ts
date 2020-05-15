import { Test, TestingModule } from '@nestjs/testing';
import { DoughnutsController } from './doughnuts.controller';

describe('Doughnuts Controller', () => {
  let controller: DoughnutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoughnutsController],
    }).compile();

    controller = module.get<DoughnutsController>(DoughnutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
