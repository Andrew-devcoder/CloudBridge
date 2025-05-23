// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { io, Socket } from 'socket.io-client';

// @Injectable()
// export class WebSocketService implements OnModuleInit {
//   private socket!: Socket;

//   onModuleInit() {
//     this.socket = io('http://api:3000', {
//       path: '/ws',
//       transports: ['websocket'],
//     });

//     this.socket.on('connect', () => {
//       console.log('[Worker] ✅ Connected to WebSocket Gateway API');
//     });

//     this.socket.on('disconnect', () => {
//       console.log('[Worker] ❌ Disconnected from WebSocket Gateway API');
//     });

//     this.socket.on('connect_error', (err) => {
//       console.error('[Worker] 🚫 Connection error:', err.message);
//     });
//   }

//   emitImageReady(data: Object) {
//     console.log('[Worker] 🔁 Forwarding image-ready to API:', data);

//     this.socket.emit('image-ready', data);
//   }
// }

import WebSocket from 'ws';

export class WebSocketService {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://api:3000/ws');

    this.socket.on('open', () => {
      console.log('[Worker] ✅ Connected to WebSocket Gateway API');
    });

    this.socket.on('close', () => {
      console.log('[Worker] ❌ Disconnected from WebSocket Gateway API');
    });

    this.socket.on('error', (err) => {
      console.error('[Worker] 🚫 Connection error:', err.message);
    });
  }

  emitImageReady(data: object) {
    console.log('[Worker] 🔁 Forwarding image-ready to API:', data);
    this.socket.send(JSON.stringify(data));
  }
}
