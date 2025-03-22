import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log('RABBIT_URL:', process.env.RABBIT_URL);

  console.log(`🚀 Server is running on: http://localhost:${port}`);
}

bootstrap();
