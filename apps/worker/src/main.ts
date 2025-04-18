import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './modules/app.module';
import { rabbitMqConfig } from './config/rabbit.conf';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    rabbitMqConfig,
  );

  await app.listen();
  console.log('✨ Worker microservice is listening to RabbitMQ...');
}

bootstrap();
