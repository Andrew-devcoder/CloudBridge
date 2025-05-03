import { Module } from '@nestjs/common';

import { ImageModule } from './image.module';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
