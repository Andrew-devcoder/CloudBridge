import { Controller, Get, Param } from '@nestjs/common';
import { RedisService } from '../services/redis.service';

@Controller('cache')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Get('set/:key/:value')
  async setCache(@Param('key') key: string, @Param('value') value: string) {
    await this.redisService.set(key, value);
    return { success: true, message: `Key "${key}" set successfully.` };
  }

  @Get('get/:key')
  async getCache(@Param('key') key: string) {
    const value = await this.redisService.get(key);
    return value
      ? { success: true, key, value }
      : { success: false, message: 'Key not found' };
  }
}
