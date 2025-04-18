import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

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
  // const port = process.env.PORT || 3000;
  // await app.listen(port);
  await app.listen(3000, '0.0.0.0');
  // console.log(`🚀 Server is running on: http://localhost:${port}`);
  console.log(`🚀 Server is running on: http://localhost:3000`);
}

bootstrap();
