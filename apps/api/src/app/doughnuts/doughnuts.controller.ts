import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { Controller, Get, Param } from '@nestjs/common';
import { DoughnutsService } from './doughnuts.service';
@Controller('doughnuts')
export class DoughnutsController {
  constructor(private readonly doughnutsService: DoughnutsService) {}

  @Get()
  getDoughnuts(): Doughnut[] {
    return this.doughnutsService.getDoughnuts();
  }

  @Get(':id')
  getDoughnut(@Param('id') id: string): Doughnut {
    return this.doughnutsService.getDoughnut(id);
  }
}
