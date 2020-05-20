import { Module } from '@nestjs/common';
import { DoughnutsController } from './doughnuts.controller';
import { DoughnutsService } from './doughnuts.service';

@Module({
  controllers: [DoughnutsController],
  providers: [DoughnutsService]
})
export class DoughnutsModule {}
