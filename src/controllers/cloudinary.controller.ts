import { Controller, Get, Param } from '@nestjs/common';
import { CloudinaryService } from 'src/services/cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Get('images')
  async getCloudinaryImages(): Promise<object> {
    return this.cloudinaryService.getCloudinaryImages();
  }

  // @Get('images/:public_id')
  // async getCloudinaryImage(
  //   @Param('public_id') publicId: string,
  // ): Promise<object> {
  //   return this.cloudinaryService.getCloudinaryImage(publicId);
  // }

  @Get('images/:publicId')
  async getCloudinaryImage(
    @Param('publicId') publicId: string,
  ): Promise<object> {
    return this.cloudinaryService.getCloudinaryImage(publicId);
  }

  @Get('image-from-cache/:publicId')
  async getImageFromCache(
    @Param('publicId') publicId: string,
  ): Promise<object> {
    return this.cloudinaryService.getImageFromCache(publicId);
  }
}
