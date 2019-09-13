import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full'},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'search', component: SearchComponent},
  { path: 'chat', component: ChatComponent},
  { path: '',  component: HomeComponent  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
