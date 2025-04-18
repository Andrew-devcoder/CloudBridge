// import { Controller, Get, Param } from '@nestjs/common';
// import { AppService } from '../services/app.service';

// @Controller('img')
// export class ImgController {
//   constructor(private readonly appService: AppService) {}
//   @Get(':publicId')
//   async getImage(@Param('publicId') publicId: string): Promise<object> {
//     return this.appService.getImage(publicId);
//   }
// }

import { Controller, Post, Param, Body } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('img')
export class ImgController {
  constructor(private readonly appService: AppService) {}

  @Post(':publicId')
  async getImage(
    @Param('publicId') publicId: string,
    @Body('socketId') socketId: string,
  ): Promise<object> {
    return this.appService.getImage(publicId, socketId);
  }
}
