import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RabbitMQService {
  constructor(@Inject('cloudinary') private readonly client: ClientProxy) {}

  async sendMessage(message: string): Promise<void> {
    try {
      await lastValueFrom(this.client.emit('image_request', message));
      console.log('Message sent:', message);
    } catch (err) {
      console.error('Error sending message:', err);
    }
  }

  @EventPattern('image_request')
  async handleImageRequest(message: string) {
    console.log('Received message:', message);
  }
}
