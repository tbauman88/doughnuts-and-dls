import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { Injectable } from '@nestjs/common';
import { doughnuts } from './doughnuts';

@Injectable()
export class DoughnutsService {
  getDoughnuts(): Doughnut[] {
    return doughnuts;
  }

  getDoughnut(doughnutId: number): Doughnut {
    return doughnuts.find(d => d.id === doughnutId);
  }
}
