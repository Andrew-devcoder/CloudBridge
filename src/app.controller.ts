import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): object {
    return { message: 'Hello from NestJS API!' };
  }

  @Get('status')
  getStatus(): object {
    return { status: 'API is running!' };
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
