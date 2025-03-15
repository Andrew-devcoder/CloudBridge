import { Controller, Get, Param } from '@nestjs/common';
import { CloudinaryService } from 'src/services/cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly appService: CloudinaryService) {}

  @Get('images')
  async getCloudinaryImages(): Promise<object> {
    return this.appService.getCloudinaryImages();
  }

  @Get('images/:public_id')
  async getCloudinaryImage(
    @Param('public_id') publicId: string,
  ): Promise<object> {
    return this.appService.getCloudinaryImage(publicId);
  }
}
