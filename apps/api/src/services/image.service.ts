import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RabbitMQService } from './rabbit.service';

@Injectable()
export class ImageService {
  constructor(
    private readonly redisService: RedisService,
    private readonly rabbitService: RabbitMQService,
  ) {}

  async getImage(publicId: string, socketId: string) {
    return this.redisService
      .get(publicId)
      .then((cachedImage) => {
        if (!cachedImage) {
          throw new Error('[REDIS] - Image not found in cache');
        }
        console.log('[REDIS] - Image found in cache. Sending to client.');
        return JSON.parse(cachedImage);
      })
      .catch(() => {
        this.rabbitService.sendMessage({ publicId, socketId });
        return {
          success: false,
          msg: 'Image not in cache. Requested from server.',
        };
      });
  }
}
