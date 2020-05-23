import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as api from '../../data/doughnuts.json';

export const doughnutError = 'Doughnut could not be found';

@Injectable()
export class DoughnutsService {
  private doughnuts: Doughnut[] = api.data;

  getDoughnuts(type?: string): Doughnut[] {
    if (type) {
      return this.doughnuts.filter(d => d.type === type);
    }

    return this.doughnuts;
  }

  getDoughnut(doughnutId: string): Doughnut {
    const doughnut = this.doughnuts.find(d => d.id === doughnutId);

    if (!doughnut) {
      throw new BadRequestException(doughnutError);
    }

    return doughnut;
  }
}
