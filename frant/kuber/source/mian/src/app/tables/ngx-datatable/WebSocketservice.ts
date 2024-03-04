import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
    private socket!: WebSocket;
    
  
    constructor() { this.socket = new WebSocket('ws://localhost:8080/ws') ;}



    sendMessage(id: number): void {
      this.socket.send(id.toString());
    }




    connect(): void {
      this.socket = new WebSocket('ws://localhost:8080/ws');

      this.socket.onopen = () => {
        console.log('WebSocket connection established.');
      };
  
      this.socket.onmessage = (event) => {
        console.log('Received message:', event.data);
      };
  
      this.socket.onclose = (event) => {
        console.log('WebSocket connection closed:', event);
      };
  
      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    }
  
    
  
    closeConnection(): void {
      this.socket.close();
    }
}
