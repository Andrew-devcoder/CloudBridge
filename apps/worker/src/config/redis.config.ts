import Redis from 'ioredis';
import * as dotenv from 'dotenv';
dotenv.config();

export const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  username: 'default',
  password: process.env.REDIS_PASSWORD,
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

export const connectRedis = async () => {
  if (!redisClient.status || redisClient.status === 'end') {
    await redisClient.connect();
  }
};
