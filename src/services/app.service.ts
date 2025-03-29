import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RabbitMQService } from './rabbit.service';

@Injectable()
export class AppService {
  constructor(
    private readonly redisService: RedisService,
    private readonly rabbitService: RabbitMQService,
  ) {}

  getStatus(): object {
    return { status: 'API is running!' };
  }

  getImage(publicId: string) {
    return this.redisService
      .get(publicId)
      .then((cachedImage) => {
        if (!cachedImage) {
          throw new Error('CACHE_MISS');
        }

        return { success: true, image: JSON.parse(cachedImage) };
      })
      .catch(() => {
        this.rabbitService.sendMessage(publicId);
        return {
          success: false,
          msg: 'Image not in cache. Requested from server.',
        };
      });
  }
}
