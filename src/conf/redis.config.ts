import * as dotenv from 'dotenv';
dotenv.config();

import Redis from 'ioredis';

export const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  username: 'default',
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

export const connectRedis = async () => {
  if (!redisClient.status || redisClient.status === 'end') {
    await redisClient.connect();
  }
};
