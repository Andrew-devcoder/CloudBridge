import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RabbitMQService } from './rabbit.service';
import { CloudinaryService } from './cloudinary.service';

@Injectable()
export class AppService {
  constructor(
    private readonly redisService: RedisService,
    private readonly rabbitService: RabbitMQService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  getStatus(): object {
    return { status: 'API is running!' };
  }

  getImage(publicId: string): object {
    return this.redisService
      .get(publicId)
      .then((cachedImage) => {
        if (!cachedImage)
          return { success: false, msg: 'Image not found in cache!' };

        return { success: true, image: JSON.parse(cachedImage) };
      })
      .catch((error) => {
        console.error('Error fetching image from Redis:', error);
        return { success: false, msg: 'error get image!' };
      });
  }
}
