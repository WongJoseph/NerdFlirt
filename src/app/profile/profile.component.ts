import { Component, OnInit } from '@angular/core';
import {Profile} from '../class/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public model: Profile;

  constructor() {
    this.model = new Profile();
    this.model.name = 'Dexter';
    this.model.description = 'Very Handsome Guy';
    this.model.phone = 123123;
  }

  ngOnInit() {
  }

}
