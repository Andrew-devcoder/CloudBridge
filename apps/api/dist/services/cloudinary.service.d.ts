import { RedisService } from './redis.service';
import { RabbitMQService } from './rabbit.service';
export declare class CloudinaryService {
    private readonly redisService;
    private readonly rabbitService;
    constructor(redisService: RedisService, rabbitService: RabbitMQService);
    getCloudinaryImages(): Promise<object>;
    getCloudinaryImage(publicId: string): Promise<object>;
    getImageFromCache(publicId: string): Promise<object>;
}
