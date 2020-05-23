import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { BadRequestException, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as api from '../../data/doughnuts.json';
import { doughnutError, DoughnutsService } from './doughnuts.service';

describe('DoughnutsService', () => {
  const doughnuts: Doughnut[] = api.data;
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

    it('should return an array of standard doughnuts', () => {
      expect(service.getDoughnuts('standard')).toEqual(
        doughnuts.filter(d => d.type === 'standard')
      );
    });

    it('should return an array of weekly doughnuts', () => {
      expect(service.getDoughnuts('weekly')).toEqual(
        doughnuts.filter(d => d.type === 'weekly')
      );
    });
  });

  describe('getDoughnut', () => {
    it('should return certain doughnut', () => {
      const doughnut = doughnuts.find(d => d.id === 'caramel-green-apple');
      expect(service.getDoughnut(doughnut.id)).toEqual(doughnut);
    });

    it('should throw an error', () => {
      const noIdCall = () => service.getDoughnut('not an id');
      expect(noIdCall).toThrowError(BadRequestException);
      expect(noIdCall).toThrowError(doughnutError);
    });
  });
});
