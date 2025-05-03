import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { rabbitClientConfig } from '../conf/rabbit.conf';
import { RabbitMQService } from '../services/rabbit.service';

@Module({
  imports: [ClientsModule.register([rabbitClientConfig])],
  providers: [RabbitMQService],
  exports: [ClientsModule, RabbitMQService],
})
export class RabbitMQModule {}
