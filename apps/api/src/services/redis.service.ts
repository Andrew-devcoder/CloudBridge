import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class RedisService implements OnModuleInit {
  private client: RedisClientType;

  async onModuleInit() {
    this.client = createClient({
      username: 'default',
      password: process.env.REDIS_PASSWORD,
      socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    });

    this.client.on('error', (err) => console.error('❌ Redis error', err));
    await this.client.connect();
    console.log('✅ Redis connected');
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }
}
