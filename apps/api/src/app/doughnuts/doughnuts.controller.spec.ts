import { Test } from '@nestjs/testing';
import { doughnuts } from './doughnuts';
import { DoughnutsController } from './doughnuts.controller';
import { DoughnutsService } from './doughnuts.service';

describe('Doughnuts Controller', () => {
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
    const doughnut = {
      id: '29',
      name: 'Caramel Green Apple',
      description:
        'Light and fluffy yeast risen donut topped with our sour green apple glaze, caramel bits, and dulce de leche drizzle. Tart + tangy. YUM!',
      price: '$3.25',
      imageUrl:
        'https://static.wixstatic.com/media/1f7fda_6da1dd24fde041c98708175c5269a79d~mv2.jpg'
    };

    jest
      .spyOn(doughnutsService, 'getDoughnut')
      .mockImplementation(() => doughnut);

    expect(await doughnutsController.getDoughnut('29')).toBe(doughnut);
  });
});
