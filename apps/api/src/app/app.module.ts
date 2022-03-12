import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoughnutsModule } from './doughnuts/doughnuts.module';

@Module({
  imports: [DoughnutsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
