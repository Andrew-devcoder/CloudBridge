import { Controller, Post, Body, Get } from '@nestjs/common';
import { RabbitMQService } from '../services/rabbit.service';

@Controller('messages')
export class RabbitMQController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Get('send')
  sendMessage(@Body('message') message: string): string {
    this.rabbitMQService.sendMessage(message);
    return `Message sent: ${message}`;
  }
}
