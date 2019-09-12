import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Profile} from '../class/profile';
import {ProfileService} from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {
    this.profileService.getProfiles()
      .subscribe(profiles => this.profiles = profiles);
  }

  searchProfile(query: string): Observable<Profile[]> {
    return of(this.profiles.filter(profiles => profiles.name.toLowerCase().indexOf(query.toLowerCase()) > -1));
  }
}
