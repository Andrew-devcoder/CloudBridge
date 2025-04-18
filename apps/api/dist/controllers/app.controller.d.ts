import { AppService } from '../services/app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getStatus(): Promise<object>;
    getFavicon(res: Response): void;
}
