import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  async set(key: string, value: string): Promise<string> {
    await this.redis.set(key, value, 'EX', 3600); // Збереження на 1 годину
    return 'Data cached!';
  }

  async get(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }
}
