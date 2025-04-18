import Redis from 'ioredis';
export declare class RedisService {
    private readonly redis;
    constructor(redis: Redis);
    set(key: string, value: string): Promise<string>;
    get(key: string): Promise<string | null>;
}
