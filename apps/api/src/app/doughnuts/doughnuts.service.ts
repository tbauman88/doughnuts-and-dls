import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { BadRequestException, Injectable } from '@nestjs/common';
import { doughnuts } from './doughnuts';

export const doughnutError = 'Doughnut could not be found';
@Injectable()
export class DoughnutsService {
  private doughnuts: Doughnut[] = doughnuts;

  getDoughnuts(): Doughnut[] {
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
