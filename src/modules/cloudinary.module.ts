import { Global, Module } from '@nestjs/common';
import { CloudinaryController } from 'src/controllers/cloudinary.controller';
import { CloudinaryService } from 'src/services/cloudinary.service';

@Global()
@Module({
  imports: [CloudinaryModule],
  controllers: [CloudinaryController],
  providers: [CloudinaryService],
})
export class CloudinaryModule {}
