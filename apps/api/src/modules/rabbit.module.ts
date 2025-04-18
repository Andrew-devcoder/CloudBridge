import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { rabbitMqConfigApi } from '../conf/rabbit.conf';
import { RabbitMQService } from '../services/rabbit.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'cloudinary',
        transport: Transport.RMQ,
        options: {
          urls: rabbitMqConfigApi.options!.urls,
          queue: 'image_request',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [RabbitMQService],
  exports: [ClientsModule, RabbitMQService],
})
export class RabbitMQModule {}
