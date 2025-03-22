import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { rabbitConfig } from '../conf/rabbit.conf';
import { RabbitMQService } from '../services/rabbit.service';
import { RabbitMQController } from '../controllers/rabbit.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'cloudinary',
        transport: Transport.RMQ,
        options: {
          urls: [rabbitConfig.url || ''],
          queue: 'orders_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [RabbitMQController],
  providers: [RabbitMQService],
  exports: [ClientsModule],
})
export class RabbitMQModule {}
