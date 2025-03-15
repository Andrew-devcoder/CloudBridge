import { Global, Module } from '@nestjs/common';
import { CloudinaryController } from 'src/controllers/cloudinary.controller';
import { CloudinaryService } from 'src/services/cloudinary.service';

@Global()
@Module({
  imports: [],
  controllers: [CloudinaryController],
  providers: [CloudinaryService],
  exports: [CloudinaryModule],
})
export class CloudinaryModule {}
