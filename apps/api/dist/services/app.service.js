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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("./redis.service");
const rabbit_service_1 = require("./rabbit.service");
let AppService = class AppService {
    redisService;
    rabbitService;
    constructor(redisService, rabbitService) {
        this.redisService = redisService;
        this.rabbitService = rabbitService;
    }
    getStatus() {
        return { status: 'API is running!' };
    }
    async getImage(publicId) {
        return this.redisService
            .get(publicId)
            .then((cachedImage) => {
            if (!cachedImage) {
                throw new Error('CACHE_MISS');
            }
            return { success: true, image: JSON.parse(cachedImage) };
        })
            .catch(() => {
            console.log('[AppService] CACHE_MISS – sending to broker');
            this.rabbitService.sendMessage(publicId);
            return {
                success: false,
                msg: 'Image not in cache. Requested from server.',
            };
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService,
        rabbit_service_1.RabbitMQService])
], AppService);
//# sourceMappingURL=app.service.js.map