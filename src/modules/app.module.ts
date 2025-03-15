import { Global, Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CloudinaryModule } from './cloudinary.module';
import { RedisModule } from './redis.module';

@Global()
@Module({
  imports: [CloudinaryModule, RedisModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
