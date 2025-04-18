import { RedisService } from './redis.service';
import { RabbitMQService } from './rabbit.service';
export declare class AppService {
    private readonly redisService;
    private readonly rabbitService;
    constructor(redisService: RedisService, rabbitService: RabbitMQService);
    getStatus(): object;
    getImage(publicId: string): Promise<{
        success: boolean;
        image: any;
    } | {
        success: boolean;
        msg: string;
    }>;
}
