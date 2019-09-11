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
import {MatInputModule} from '@angular/material/input';



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
    MatToolbarModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule
  ]
})
export class MaterialModule { }
