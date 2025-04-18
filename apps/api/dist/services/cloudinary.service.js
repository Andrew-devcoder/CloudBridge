"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_conf_1 = require("../conf/cloudinary.conf");
const redis_service_1 = require("./redis.service");
const rabbit_service_1 = require("./rabbit.service");
let CloudinaryService = class CloudinaryService {
    redisService;
    rabbitService;
    constructor(redisService, rabbitService) {
        this.redisService = redisService;
        this.rabbitService = rabbitService;
    }
    async getCloudinaryImages() {
        try {
            const result = await cloudinary_conf_1.CloudinaryConfig.api.resources({
                type: 'upload',
                max_results: 2,
            });
            return { success: true, images: result.resources };
        }
        catch (error) {
            return { success: false, message: 'Failed to fetch images!', error };
        }
    }
    async getCloudinaryImage(publicId) {
        const cachedImage = await this.redisService.get(publicId);
        if (cachedImage) {
            return { success: true, image: JSON.parse(cachedImage) };
        }
        await this.rabbitService.sendMessage(JSON.stringify({ publicId }));
        return {
            success: false,
            message: 'Image request is being processed. Try again later.',
        };
    }
    async getImageFromCache(publicId) {
        const cachedImage = await this.redisService.get(publicId);
        return cachedImage
            ? { success: true, image: JSON.parse(cachedImage) }
            : { success: false, message: 'Image not found in cache' };
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService,
        rabbit_service_1.RabbitMQService])
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map