import { Controller, Post, Param, Body } from '@nestjs/common';
import { ImageService } from '../services/image.service';

@Controller('img')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post(':publicId')
  async getImage(
    @Param('publicId') publicId: string,
    @Body('socketId') socketId: string,
  ): Promise<object> {
    console.log('Received request for image with publicId:', publicId);
    return this.imageService.getImage(publicId, socketId);
  }
}
