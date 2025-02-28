import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class AppService {
  constructor() {
    cloudinary.config({
      cloudinary_url: process.env.CLOUDINARY_URL,
    });
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

  getCloudinary(): string {
    return 'Cloudinary is running!';
  }
}
