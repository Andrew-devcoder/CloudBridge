"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = exports.redisClient = void 0;
const ioredis_1 = require("ioredis");
const dotenv = require("dotenv");
dotenv.config();
exports.redisClient = new ioredis_1.default({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    username: 'default',
    password: process.env.REDIS_PASSWORD,
});
exports.redisClient.on('error', (err) => console.error('Redis Client Error', err));
const connectRedis = async () => {
    if (!exports.redisClient.status || exports.redisClient.status === 'end') {
        await exports.redisClient.connect();
    }
};
exports.connectRedis = connectRedis;
//# sourceMappingURL=redis.config.js.map