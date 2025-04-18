import { RabbitMQService } from '../services/rabbit.service';
export declare class RabbitMQController {
    private readonly rabbitMQService;
    constructor(rabbitMQService: RabbitMQService);
    sendMessage(message: string): string;
}
