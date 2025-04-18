import { AppService } from '../services/app.service';
export declare class ImgController {
    private readonly appService;
    constructor(appService: AppService);
    getImage(publicId: string): Promise<object>;
}
