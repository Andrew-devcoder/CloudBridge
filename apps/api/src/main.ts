import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { createServer } from 'http';
import { WsServer } from './ws/ws-server';
import { corsOptions } from './conf/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(corsOptions);

  const server = createServer(app.getHttpAdapter().getInstance());

  const wsServer = new WsServer();
  wsServer.register(server);

  await app.init();

  server.listen(3000, '0.0.0.0', () => {
    console.log(`[API] 🚀 Server is running`);
  });
}

bootstrap();
