import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SearchService} from '../Services/search.service';
import {ProfileService} from '../Services/profile.service';
import {Profile} from '../class/profile';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  messages: Profile[];
  query: string;
  modelChanged: Subject<string> = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private profileService: ProfileService
  ) {
    this.modelChanged.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(query => {
        this.query = query;
        this.searchProfiles();
      });
  }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileService.getProfiles()
      .subscribe(profiles => this.messages = profiles);
  }

  searchProfiles(): void {
    this.searchService.searchProfile(this.query)
      .subscribe(profiles => this.messages = profiles);
  }

  changed(text: string) {
    this.modelChanged.next(text);
  }
}
