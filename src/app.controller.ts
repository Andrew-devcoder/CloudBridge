import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

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
}
