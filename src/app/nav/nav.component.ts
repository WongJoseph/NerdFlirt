import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  @Input() name: string;

  navLinks = [
    {label: 'My Profile', path: 'profile'},
    {label: 'Search', path: 'search'},
    {label: 'Chat', path: 'chat'}
  ];

  ngOnInit() {
  }

}
