import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatMenuModule, MatDialogModule, MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
  MatToolbarModule, FlexLayoutModule, MatCardModule, MatIconModule, MatMenuModule, MatDialogModule,
  MatInputModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCheckboxModule,
  MatToolbarModule, FlexLayoutModule, MatCardModule, MatIconModule, MatMenuModule, 
  MatDialogModule, MatInputModule, MatProgressSpinnerModule],
})
export class CambuzzMaterialModule { }
