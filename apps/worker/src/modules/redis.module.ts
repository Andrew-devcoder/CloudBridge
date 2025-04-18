import { Module } from '@nestjs/common';
import { redisClient, connectRedis } from '../config/redis.config';
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
  exports: ['REDIS_CLIENT', RedisService],
})
export class RedisModule {}
