import {Component, Inject, OnInit} from '@angular/core';
import {Profile} from '../class/profile';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../Services/profile.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  name: string;
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
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getProfile();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: '250px',
      height: '250px',
      data: {name: this.model.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
      .subscribe(model => this.model = model);
  }
}

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './dialog/profile-dialog/profile-dialog.component.html',
  styleUrls: ['./dialog/profile-dialog/profile-dialog.component.css']
})
export class ProfileDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

