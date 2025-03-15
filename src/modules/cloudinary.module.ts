import { Module } from '@nestjs/common';
import { CloudinaryController } from '../controllers/cloudinary.controller';
import { CloudinaryService } from '../services/cloudinary.service';

@Module({
  imports: [],
  controllers: [CloudinaryController],
  providers: [CloudinaryService],
})
export class CloudinaryModule {}
