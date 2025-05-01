// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './modules/app.module';
// import { createServer } from 'http';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   const httpServer = createServer(app.getHttpAdapter().getInstance());

//   app.enableCors({
//     origin: [
//       'http://localhost:5173',
//       'https://andrew-devcoder-authflowx.netlify.app',
//     ],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   });
//   // await app.listen(process.env.PORT || 3000, '0.0.0.0');

//   httpServer.listen(process.env.PORT || 3000, () => {
//     console.log(`🚀 Server is running on port ${process.env.PORT || 3000}`);
//   });

//   console.log('🚀 Server is running');
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://andrew-devcoder-authflowx.netlify.app',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const httpServer = createServer(app.getHttpAdapter().getInstance());

  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });

  wss.on('connection', (socket) => {
    console.log('✅ WebSocket connected');

    socket.on('message', (data) => {
      console.log('📩 message received:', data.toString());
    });

    socket.on('close', () => {
      console.log('❌ WebSocket disconnected');
    });
  });

  await app.init();

  const PORT = parseInt(process.env.PORT || '3000', 10);

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
}

bootstrap();
