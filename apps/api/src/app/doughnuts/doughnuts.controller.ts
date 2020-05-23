import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { DoughnutsService } from './doughnuts.service';

enum DoughnutType {
  'standard',
  'weekly'
}
@ApiTags('doughnuts')
@Controller('doughnuts')
export class DoughnutsController {
  constructor(private readonly doughnutsService: DoughnutsService) {}

  @Get()
  @ApiQuery({ name: 'type', enum: DoughnutType, required: false })
  getDoughnuts(@Query('type') type?: string): Doughnut[] {
    return this.doughnutsService.getDoughnuts(type);
  }

  @Get(':id')
  getDoughnut(@Param('id') id: string): Doughnut {
    return this.doughnutsService.getDoughnut(id);
  }
}
