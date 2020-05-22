import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { Test } from '@nestjs/testing';
import * as api from '../../data/doughnuts.json';
import { DoughnutsController } from './doughnuts.controller';
import { DoughnutsService } from './doughnuts.service';

describe('Doughnuts Controller', () => {
  const doughnuts: Doughnut[] = api.data;
  let doughnutsController: DoughnutsController;
  let doughnutsService: DoughnutsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [DoughnutsController],
      providers: [DoughnutsService]
    }).compile();

    doughnutsService = moduleRef.get<DoughnutsService>(DoughnutsService);
    doughnutsController = moduleRef.get<DoughnutsController>(
      DoughnutsController
    );
  });

  it('should be defined', () => {
    expect(doughnutsController).toBeDefined();
  });

  it('should return an array of doughnuts', async () => {
    jest
      .spyOn(doughnutsService, 'getDoughnuts')
      .mockImplementation(() => doughnuts);

    expect(await doughnutsController.getDoughnuts()).toBe(doughnuts);
  });

  it('should return certain doughnut', async () => {
    const doughnut = doughnuts.find(d => d.id === 'caramel-green-apple');
    jest
      .spyOn(doughnutsService, 'getDoughnut')
      .mockImplementation(() => doughnut);

    expect(await doughnutsController.getDoughnut('caramel-green-apple')).toBe(
      doughnut
    );
  });
});
