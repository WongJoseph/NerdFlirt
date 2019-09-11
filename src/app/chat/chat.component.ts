import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages = [
    {from: 'Dexter', subject: 'Like to Party', content: 'Test'},
    {from: 'Joseph', subject: 'Like to Drink', content: 'Test'},
    {from: 'Daniel', subject: 'Like to Car', content: 'Test'},
    {from: 'Desmond', subject: 'Like to Talk', content: 'Test'},
    {from: 'Epis', subject: 'Like to Game', content: 'Test'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
