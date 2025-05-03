import { Module } from '@nestjs/common';

import { ImageController } from 'src/controllers/image.controller';

import { ImageService } from 'src/services/image.service';
import { RedisModule } from './redis.module';
import { RabbitMQModule } from './rabbit.module';

@Module({
  imports: [RedisModule, RabbitMQModule],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
