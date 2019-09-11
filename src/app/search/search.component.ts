import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
