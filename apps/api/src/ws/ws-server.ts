import { WebSocketServer } from 'ws';
import { Server } from 'http';

export class WsServer {
  private wss: WebSocketServer;

  register(server: Server) {
    this.wss = new WebSocketServer({ server, path: '/ws' });

    this.wss.on('connection', (socket) => {
      console.log('✅ WebSocket connected');

      socket.on('message', (data) => {
        console.log('📩 Message:', data.toString());
      });

      socket.on('close', () => {
        console.log('❌ WebSocket disconnected');
      });
    });

    console.log('🌐 WebSocket server initialized on /ws');
  }
}
