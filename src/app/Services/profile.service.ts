import {Injectable} from '@angular/core';
import {Profile} from '../class/profile';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private MOCK_PROFILE: Profile[] = [
    {name: 'Dexter', description: 'Like to Party', id: 1, src: '../../assets/dexter_profile.jpg'},
    {name: 'Joseph', description: 'Like to Drink', id: 2, src: '../../assets/joseph_profile.jpg'},
    {name: 'Daniel', description: 'Like to Car', id: 3, src: '../../assets/nerdflirt_logo.png'},
    {name: 'Desmond', description: 'Like to Talk', id: 4, src: '../../assets/desmond_profile.jpg'},
    {name: 'Jorge', description: 'Like to Starbucks', id: 5, src: '../../assets/jorge_profile.jpg'}
  ];

  constructor() {
  }

  getProfile(id: number): Observable<Profile> {
    if (!id) {
      return of({name: 'Dexter', description: 'Like to Party', id: 1, src: '../../assets/dexter_profile.jpg'});
    } else {
      return of(this.MOCK_PROFILE.find(profile => profile.id === id));
    }
  }

  getProfiles(): Observable<Profile[]> {
    return of(this.MOCK_PROFILE);
  }
}
