import { Controller, Get, Param } from '@nestjs/common';
import { CloudinaryService } from 'src/services/cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Get('images')
  async getCloudinaryImages(): Promise<object> {
    return this.cloudinaryService.getCloudinaryImages();
  }

  @Get('images/:publicId')
  async getCloudinaryImage(
    @Param('publicId') publicId: string,
  ): Promise<object> {
    return this.cloudinaryService.getCloudinaryImage(publicId);
  }
}
