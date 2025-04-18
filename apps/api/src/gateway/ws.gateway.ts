import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
  path: '/ws',
})
export class WsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log('🚀 WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    console.log('✅ Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('❌ Client disconnected:', client.id);
  }

  @SubscribeMessage('image-ready')
  handleImageReady(
    @MessageBody()
    payload: {
      socketId: string;
      image: {
        secure_url: string;
        public_id: string;
      };
    },
  ): void {
    this.server.to(payload.socketId).emit('image-ready', {
      success: true,
      image: payload.image.secure_url,
      public_id: payload.image.public_id,
    });
  }
}
