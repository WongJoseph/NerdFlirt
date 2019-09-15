import {Component, OnInit} from '@angular/core';
import {MessageService} from '../Services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message = '';
  messages = [
    {from: 'Dexter', subject: 'Like to Party', content: 'Test'}
  ];

  websocket = new WebSocket('ws://localhost:8080');

  constructor(private messageService: MessageService) {
  }


  ngOnInit() {
    this.websocket.onopen = (evt => this.onOpen(evt));
    this.websocket.onclose = (evt => this.onClose(evt));
    this.websocket.onmessage = (evt => this.onMessage(evt));
    this.websocket.onerror = (evt => this.onError(evt));
  }

  sendMessage() {
    this.messageService.showMessage('Message Sent', 'Ok');
    this.doSend(this.message);
    this.message = '';
  }

  doSend(message: string) {
    this.websocket.send(message);
  }

  onOpen(evt) {
  }

  onClose(evt) {
  }

  onMessage(evt) {
    this.messages.push({from: 'Joseph', subject: 'websocket', content: evt.data});
    // this.websocket.close();
  }

  onError(evt) {
  }

}
