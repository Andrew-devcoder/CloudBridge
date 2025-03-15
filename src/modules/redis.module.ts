import { Module } from '@nestjs/common';
import { redisClient, connectRedis } from '../conf/redis.config';
import { RedisController } from 'src/controllers/redis.controller';

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
  imports: [],
  controllers: [RedisController],
})
export class RedisModule {}
