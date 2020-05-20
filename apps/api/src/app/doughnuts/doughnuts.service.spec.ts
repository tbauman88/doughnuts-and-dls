import { BadRequestException, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { doughnuts } from './doughnuts';
import { doughnutError, DoughnutsService } from './doughnuts.service';

describe('DoughnutsService', () => {
  let service: DoughnutsService;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoughnutsService]
    }).compile();

    app = module.createNestApplication();
    await app.init();

    service = module.get<DoughnutsService>(DoughnutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getDoughnuts', () => {
    it('should return an array of doughnuts', () => {
      expect(service.getDoughnuts()).toEqual(doughnuts);
    });
  });

  describe('getDoughnut', () => {
    it('should return certain doughnut', () => {
      expect(service.getDoughnut(29)).toEqual({
        id: 29,
        name: 'Caramel Green Apple',
        description:
          'Light and fluffy yeast risen donut topped with our sour green apple glaze, caramel bits, and dulce de leche drizzle. Tart + tangy. YUM!',
        price: '$3.25',
        imageUrl:
          'https://static.wixstatic.com/media/1f7fda_6da1dd24fde041c98708175c5269a79d~mv2.jpg'
      });
    });

    it('should throw an error', () => {
      const noIdCall = () => service.getDoughnut(9999);
      expect(noIdCall).toThrowError(BadRequestException);
      expect(noIdCall).toThrowError(doughnutError);
    });
  });
});
