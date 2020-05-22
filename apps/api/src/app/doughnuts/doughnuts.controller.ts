import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DoughnutsService } from './doughnuts.service';

@ApiBearerAuth()
@ApiTags('doughnuts')
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
