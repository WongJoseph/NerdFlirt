import {Component, Inject, OnInit} from '@angular/core';
import {Profile} from '../class/profile';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../Services/profile.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ProfileDialogComponent} from './dialog/profile-dialog/profile-dialog.component';
import {MessageService} from '../Services/message.service';

export interface DialogData {
  name: string;
  message: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public model: Profile;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private messageService: MessageService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getProfile();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: '300x',
      data: {name: this.model.name, message: ''},
      restoreFocus: false,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.messageService.showMessage(result, 'Ok');
      }
    });
  }

  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
      .subscribe(model => this.model = model);
  }
}
