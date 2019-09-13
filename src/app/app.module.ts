import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ChatComponent } from './chat/chat.component';
import {SearchService} from './Services/search.service';
import {MessageService} from './Services/message.service';
import {FormsModule} from '@angular/forms';
import {ProfileService} from './Services/profile.service';
import { ProfileDialogComponent } from './profile/dialog/profile-dialog/profile-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    SearchComponent,
    ChatComponent,
    ProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    SearchService,
    MessageService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
