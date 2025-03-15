import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getNestJSHello(): string {
    return this.appService.getNestJSHello();
  }

  @Get('status')
  getStatus(): object {
    return this.appService.getStatus();
  }

  @Get('cloudinary/images')
  async getCloudinaryImages(): Promise<object> {
    return this.appService.getCloudinaryImages();
  }

  @Get('cloudinary/images/:public_id')
  async getCloudinaryImage(
    @Param('public_id') publicId: string,
  ): Promise<object> {
    return this.appService.getCloudinaryImage(publicId);
  }
}
