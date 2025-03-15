import { Injectable } from '@nestjs/common';
import { CloudinaryConfig } from '../conf/cloudinary.conf';

@Injectable()
export class AppService {
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

  async getCloudinaryImage(publicId: string): Promise<object> {
    try {
      const result = await CloudinaryConfig.api.resource(publicId);
      return { success: true, image: result };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch image!',
        error: error.message,
      };
    }
  }

  getHello(): string {
    return 'Hello World!';
  }

  getNestJSHello(): string {
    return 'Hello from NestJS API!';
  }

  getStatus(): object {
    return { status: 'API is running!' };
  }
}
