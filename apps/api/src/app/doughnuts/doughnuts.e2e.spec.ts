import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { doughnuts } from './doughnuts';
import { DoughnutsModule } from './doughnuts.module';
import { DoughnutsService } from './doughnuts.service';

describe('Doughnuts', () => {
  let app: INestApplication;
  const doughnutsService = {
    getDoughnuts: () => doughnuts,
    getDoughnut: (doughnutId: number) => doughnuts[doughnutId]
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

  it(`/GET 'Summer Berry Cheesecake' doughnut`, () => {
    return request(app.getHttpServer())
      .get('/doughnuts/28')
      .expect(200)
      .expect(doughnutsService.getDoughnut(28));
  });

  afterAll(async () => {
    await app.close();
  });
});
