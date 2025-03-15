import { Module } from '@nestjs/common';
import { redisClient, connectRedis } from '../conf/redis.config';
import { RedisController } from '../controllers/redis.controller';
import { RedisService } from '../services/redis.service';

@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      useFactory: async () => {
        await connectRedis();
        return redisClient;
      },
    },
  ],
  controllers: [RedisController],
  exports: [RedisService],
})
export class RedisModule {}
