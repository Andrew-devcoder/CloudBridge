import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { RedisModule } from './redis.module';
import { RabbitMQModule } from './rabbit.module';
import { ImgController } from '../controllers/img.controller';
import { WsGateway } from 'src/gateway/ws.gateway';

@Module({
  imports: [RedisModule, RabbitMQModule],
  controllers: [AppController, ImgController],
  providers: [AppService, WsGateway],
})
export class AppModule {}
