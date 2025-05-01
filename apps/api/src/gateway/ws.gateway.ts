import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { WebSocketServer as WS, WebSocket } from 'ws';

@WebSocketGateway({ path: '/ws' })
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: WS;

  private clients = new Map<string, WebSocket>();

  handleConnection(client: WebSocket) {
    console.log('✅ WebSocket connected');

    client.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());

        // Клієнт реєструється
        if (data.type === 'register' && data.socketId) {
          this.clients.set(data.socketId, client);
          console.log('[WS] ✅ Registered socketId:', data.socketId);

          client.on('close', () => {
            this.clients.delete(data.socketId);
            console.log('[WS] ❌ Disconnected:', data.socketId);
          });

          return;
        }

        // Якщо воркер надсилає через WS (необов’язково)
        if (data.type === 'image-ready' && data.socketId && data.image) {
          this.sendToClient(data.socketId, { image: data.image });
        }
      } catch (err) {
        console.warn('[WS] ⚠️ Invalid message:', message.toString());
      }
    });
  }

  handleDisconnect(client: WebSocket) {
    console.log('❌ WebSocket disconnected');
  }

  sendToClient(socketId: string, payload: any) {
    const socket = this.clients.get(socketId);

    if (!socket || socket.readyState !== WebSocket.OPEN) {
      console.warn('[WS] ❌ Cannot send to socketId:', socketId);
      return;
    }

    socket.send(JSON.stringify({ type: 'image-ready', data: payload }));
    console.log('[WS] 📤 Sent image to socketId:', socketId);
  }
}
