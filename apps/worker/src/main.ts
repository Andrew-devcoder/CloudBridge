import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { rabbitMqConfig } from './config/rabbit.conf'; // <-- твої RMQ options

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1️⃣ Підключаємо RMQ як мікросервіс
  app.connectMicroservice(rabbitMqConfig);

  // 2️⃣ Стартуємо мікросервіс
  await app.startAllMicroservices();
  console.log('✨✅ API microservice connected to RabbitMQ ');

  // 3️⃣ WebSocket сервер
  const server = createServer(app.getHttpAdapter().getInstance());
  const wss = new WebSocketServer({ server, path: '/ws' });

  wss.on('connection', (socket) => {
    console.log('✅ WebSocket connected');

    socket.on('message', (data) => {
      console.log('📩 Message:', data.toString());
    });

    socket.on('close', () => {
      console.log('❌ WebSocket disconnected');
    });
  });

  await app.init();

  server.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
  });
}

bootstrap();
