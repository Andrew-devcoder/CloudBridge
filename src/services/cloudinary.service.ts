import { Injectable } from '@nestjs/common';
import { CloudinaryConfig } from '../conf/cloudinary.conf';
import { RedisService } from './redis.service';
import { RabbitMQService } from './rabbit.service';

@Injectable()
export class CloudinaryService {
  constructor(
    private readonly redisService: RedisService,
    private readonly rabbitService: RabbitMQService,
  ) {}

  async getCloudinaryImages(): Promise<object> {
    try {
      const result = await CloudinaryConfig.api.resources({
        type: 'upload',
        max_results: 2,
      });
      return { success: true, images: result.resources };
    } catch (error) {
      return { success: false, message: 'Failed to fetch images!', error };
    }
  }

  // async getCloudinaryImage(publicId: string): Promise<object> {
  //   const cachedImage = await this.redisService.get(publicId);

  //   if (cachedImage) {
  //     return { success: true, image: JSON.parse(cachedImage) };
  //   }

  //   try {
  //     const result = await CloudinaryConfig.api.resource(publicId);

  //     await this.redisService.set(publicId, JSON.stringify(result));

  //     return { success: true, image: result };
  //   } catch (error) {
  //     return {
  //       success: false,
  //       message: 'Failed to fetch image from Cloudinary!',
  //       error: error.message,
  //     };
  //   }
  // }

  async getCloudinaryImage(publicId: string): Promise<object> {
    const cachedImage = await this.redisService.get(publicId);

    if (cachedImage) {
      return { success: true, image: JSON.parse(cachedImage) };
    }

    await this.rabbitService.sendMessage(JSON.stringify({ publicId }));

    return {
      success: false,
      message: 'Image request is being processed. Try again later.',
    };
  }

  async getImageFromCache(publicId: string): Promise<object> {
    const cachedImage = await this.redisService.get(publicId);
    return cachedImage
      ? { success: true, image: JSON.parse(cachedImage) }
      : { success: false, message: 'Image not found in cache' };
  }
}
