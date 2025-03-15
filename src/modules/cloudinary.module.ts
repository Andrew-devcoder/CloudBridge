import { Module } from '@nestjs/common';
import { CloudinaryController } from '../controllers/cloudinary.controller';
import { CloudinaryService } from '../services/cloudinary.service';
import { RedisService } from '../services/redis.service';

@Module({
  controllers: [CloudinaryController],
  providers: [CloudinaryService, RedisService],
})
export class CloudinaryModule {}
