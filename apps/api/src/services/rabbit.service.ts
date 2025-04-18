import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RabbitMQService {
  constructor(@Inject('cloudinary') private readonly client: ClientProxy) {}

  async sendMessage(payload: {
    publicId: string;
    socketId: string;
  }): Promise<void> {
    try {
      await lastValueFrom(this.client.send('image_request', payload));
      console.log('[RabbitMQService] Message sent:', payload);
    } catch (err) {
      console.error('[RabbitMQService] Error sending message:', err);
    }
  }
}
