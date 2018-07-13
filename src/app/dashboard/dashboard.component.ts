import { UploadComponent } from './../upload/upload.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Image } from './../image';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  imageList: Observable<any[]>;
  tempImage: Image = new Image();
  imageLoading: Boolean = true;
  dialogRef: MatDialogRef<any>;
  constructor(public db: AngularFireDatabase, public dialog: MatDialog) {
    this.imageList = db.list('pictures').valueChanges();
    this.imageList.subscribe(() => {
      this.imageLoading = false;
    });
    this.tempImage.url = 'assets/temp.jpeg';
    this.tempImage.clickedBy = new User();
    this.tempImage.clickedBy.displayName = 'Loading';
    this.tempImage.clickedBy.photoUrl = 'assets/users.png';
  }

  ngOnInit() {
  }

  uploadForm() {
    const comp = this;
    if (!comp.dialogRef) {
      comp.dialogRef = this.dialog.open(UploadComponent, { disableClose: true, hasBackdrop: false });
      // comp.dialogRef.afterClosed().subscribe((snapshot) => {
      // comp.dialogRef = undefined;
      // });
    } else {
      comp.dialogRef.close();
      comp.dialogRef = undefined;
    }
  }

}
