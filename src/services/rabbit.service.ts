import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  constructor(@Inject('cloudinary') private readonly client: ClientProxy) {}

  sendMessage(message: string): void {
    this.client.emit('order_created', message).subscribe({
      next: () => console.log('Message sent:', message),
      error: (err) => console.error('Error sending message:', err),
    });
  }
}
