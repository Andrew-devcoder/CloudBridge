import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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
