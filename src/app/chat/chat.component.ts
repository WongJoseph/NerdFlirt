import { Component, OnInit } from '@angular/core';
import {MessageService} from '../Services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message = '';

  messages = [
    {from: 'Dexter', subject: 'Like to Party', content: 'Test'},
    {from: 'Joseph', subject: 'Like to Drink', content: 'Test'},
    {from: 'Daniel', subject: 'Like to Car', content: 'Test'},
    {from: 'Desmond', subject: 'Like to Talk', content: 'Test'},
    {from: 'Epis', subject: 'Like to Game', content: 'Test'},
    {from: 'Epis', subject: 'Like to Game', content: 'Test'},
    {from: 'Dexter', subject: 'Like to Party', content: 'Test'},
    {from: 'Joseph', subject: 'Like to Drink', content: 'Test'},
    {from: 'Daniel', subject: 'Like to Car', content: 'Test'},
    {from: 'Desmond', subject: 'Like to Talk', content: 'Test'},
    {from: 'Epis', subject: 'Like to Game', content: 'Test'},
    {from: 'Epis', subject: 'Like to Game', content: 'Test'}
  ];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.showMessage('Message Sent', 'Ok');
    this.message = '';
  }

}
