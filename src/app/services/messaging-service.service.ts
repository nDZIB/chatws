import { Injectable } from '@angular/core';
import { Client, Message } from "@stomp/stompjs";

@Injectable({
  providedIn: 'root'
})
export class MessagingServiceService {

  constructor() { 
    // this.connect();
  }

  connect(): void {
    const client = new Client({
      brokerURL: 'http://localhost:8080/sow',
      connectHeaders: {
        login: 'user',
        passcode: 'password'
      },

      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    client.onConnect = (frame)=> {
      console.log(frame, "are we good");
      
    }


    client.activate();
  }
}
