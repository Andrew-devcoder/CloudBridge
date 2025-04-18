"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitMqConfigApi = void 0;
const dotenv = require("dotenv");
const microservices_1 = require("@nestjs/microservices");
dotenv.config();
const RABBIT_URL = process.env.RABBIT_URL;
if (!RABBIT_URL) {
    throw new Error('🐰 RABBIT_URL is not defined in environment variables!');
}
exports.rabbitMqConfigApi = {
    transport: microservices_1.Transport.RMQ,
    options: {
        urls: [RABBIT_URL],
        queue: 'image_request',
        queueOptions: {
            durable: false,
        },
    },
};
//# sourceMappingURL=rabbit.conf.js.map