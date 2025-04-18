import { Injectable } from '@nestjs/common';
import { CloudinaryConfig } from '../config/cloudinary.conf';
import { RedisService } from './redis.service';
import { RabbitService } from './rabbit.service';

@Injectable()
export class CloudinaryService {
  async getCloudinaryImages(): Promise<object> {
    console.log('Fetching images from Cloudinary...');

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

  async getCloudinaryImage(publicId: string): Promise<object> {
    try {
      const result = await CloudinaryConfig.api.resource(publicId);
      return result;
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch image from Cloudinary!',
        error: error,
      };
    }
  }
}
