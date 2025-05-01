import { Controller, Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CloudinaryService } from './cloudinary.service';
import { WebSocketService } from './websocket.service';
import { RedisService } from './redis.service';

@Injectable()
@Controller()
export class RabbitService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly webSocketService: WebSocketService,
    private readonly redisService: RedisService,
  ) {}

  @MessagePattern('image_request')
  async handleImageTask(message: {
    publicId: string;
    socketId: string;
  }): Promise<object> {
    const { publicId, socketId } = message;
    const requestCloudinary = await this.cloudinaryService.getCloudinaryImage(
      publicId,
    );
    const request = {
      image: requestCloudinary,
      socketId: socketId,
    };

    console.log('[Worker] 📥 Got image request for:', socketId, publicId);

    this.webSocketService.emitImageReady(request);

    this.redisService.set(publicId, JSON.stringify(requestCloudinary));

    return { status: 'ok', received: message };
  }
}
