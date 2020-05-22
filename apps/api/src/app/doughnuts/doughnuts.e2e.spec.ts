import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import * as api from '../../data/doughnuts.json';
import { DoughnutsModule } from './doughnuts.module';
import { DoughnutsService } from './doughnuts.service';

describe('Doughnuts', () => {
  const doughnuts: Doughnut[] = api.data;
  let app: INestApplication;

  const doughnutsService = {
    getDoughnuts: () => doughnuts,
    getDoughnut: (doughnutId: string) =>
      doughnuts.find(d => d.id === doughnutId)
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [DoughnutsModule]
    })
      .overrideProvider(DoughnutsService)
      .useValue(doughnutsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET doughnuts`, () => {
    return request(app.getHttpServer())
      .get('/doughnuts')
      .expect(200)
      .expect(doughnutsService.getDoughnuts());
  });

  it(`/GET 'caramel-green-apple' doughnut`, () => {
    return request(app.getHttpServer())
      .get('/doughnuts/caramel-green-apple')
      .expect(200)
      .expect(doughnutsService.getDoughnut('caramel-green-apple'));
  });

  afterAll(async () => {
    await app.close();
  });
});
