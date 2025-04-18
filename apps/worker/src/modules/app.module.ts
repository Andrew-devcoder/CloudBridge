import { Module } from '@nestjs/common';
import { RabbitService } from '../services/rabbit.service';
import { CloudinaryService } from '../services/cloudinary.service';
import { WebSocketService } from '../services/websocket.service';
import { RedisModule } from './redis.module';

@Module({
  imports: [RedisModule],
  controllers: [RabbitService],
  providers: [CloudinaryService, WebSocketService],
})
export class AppModule {}
