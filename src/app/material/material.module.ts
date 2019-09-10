import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
