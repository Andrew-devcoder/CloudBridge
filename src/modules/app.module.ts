import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CloudinaryModule } from './cloudinary.module';
import { RedisModule } from './redis.module';
import { RabbitMQModule } from './rabbit.module';

@Module({
  imports: [CloudinaryModule, RedisModule, RabbitMQModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
