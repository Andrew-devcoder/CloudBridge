import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/services/app.service';

@Controller('img')
export class ImgController {
  constructor(private readonly appService: AppService) {}
  @Get(':publicId')
  async getImage(@Param('publicId') publicId: string): Promise<object> {
    return this.appService;
  }
}
