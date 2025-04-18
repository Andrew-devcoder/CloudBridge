"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rabbit_conf_1 = require("../conf/rabbit.conf");
const rabbit_service_1 = require("../services/rabbit.service");
const rabbit_controller_1 = require("../controllers/rabbit.controller");
let RabbitMQModule = class RabbitMQModule {
};
exports.RabbitMQModule = RabbitMQModule;
exports.RabbitMQModule = RabbitMQModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'cloudinary',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: rabbit_conf_1.rabbitMqConfigApi.options.urls,
                        queue: 'image_request',
                        queueOptions: {
                            durable: false,
                        },
                    },
                },
            ]),
        ],
        controllers: [rabbit_controller_1.RabbitMQController],
        providers: [rabbit_service_1.RabbitMQService],
        exports: [microservices_1.ClientsModule, rabbit_service_1.RabbitMQService],
    })
], RabbitMQModule);
//# sourceMappingURL=rabbit.module.js.map