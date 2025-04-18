import Redis from 'ioredis';
export declare const redisClient: Redis;
export declare const connectRedis: () => Promise<void>;
