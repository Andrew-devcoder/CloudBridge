import { Module, Global } from '@nestjs/common';
import { redisClient, connectRedis } from '../conf/redis.config';

@Global()
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: async () => {
        await connectRedis();
        return redisClient;
      },
    },
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
