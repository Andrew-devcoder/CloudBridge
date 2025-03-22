import { Module } from '@nestjs/common';
import { CloudinaryController } from '../controllers/cloudinary.controller';
import { CloudinaryService } from '../services/cloudinary.service';
import { RedisService } from '../services/redis.service';
import { RedisModule } from './redis.module';
import { RabbitMQModule } from './rabbit.module';

@Module({
  controllers: [CloudinaryController],
  providers: [CloudinaryService, RedisService],
  imports: [RedisModule, RabbitMQModule],
})
export class CloudinaryModule {}
