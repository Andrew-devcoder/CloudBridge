import { RmqOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

const RABBIT_URL = process.env.RABBIT_URL;

if (!RABBIT_URL) {
  throw new Error('🐰 RABBIT_URL is not defined in environment variables!');
}

export const rabbitMqConfig: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [RABBIT_URL],
    queue: 'image_request',
    queueOptions: {
      durable: false,
    },
  },
};
