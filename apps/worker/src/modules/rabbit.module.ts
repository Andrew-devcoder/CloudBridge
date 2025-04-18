import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { rabbitMqConfig } from '../config/rabbit.conf';
import { RabbitService } from '../services/rabbit.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'cloudinary',
        transport: Transport.RMQ,
        options: {
          urls: rabbitMqConfig.options!.urls,
          queue: 'image_request',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [RabbitService],
  exports: [ClientsModule, RabbitService],
})
export class RabbitMQModule {}
