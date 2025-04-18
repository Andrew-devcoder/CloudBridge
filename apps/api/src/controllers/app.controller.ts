import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  async getStatus(): Promise<object> {
    return this.appService.getStatus();
  }

  @Get('favicon.ico')
  getFavicon(@Res() res: Response) {
    res.status(204).end();
  }
}
