import { UploadsService } from './../services/uploads.service';
import { User } from './../user';
import { Image } from './../image';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  // uploadImage: FirebaseObjectObservable<any>;
  image = new Image();
  uploading: Boolean = false;
  uploadDone: Boolean = false;
  uploadPercentage: Number = 0;
  uploadTask: any;
  user: User = new User();


  constructor(public dialogRef: MatDialogRef<UploadComponent>, public db: AngularFireDatabase, public storage: 
    AngularFireStorage, public us: UploadsService) {


  }


  uploadFile() {
    const comp = this;
    comp.uploading = true;
    comp.uploadDone = false;
    const file: File = (<HTMLInputElement>document.getElementById('uploadImage')).files[0];
    const randomId = Math.random().toString(36).substring(2);
    comp.uploadTask = comp.storage.ref(randomId).put(file);;
    comp.us.addTask(comp.uploadTask);
    comp.uploadTask.then((snapshot)=>{
      console.log(snapshot)
    }).catch( (snapshot)=> {
      console.log(snapshot);
    }).snapshotChanges((snapshot)=>{
      console.log(snapshot);
    });
    //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   comp.uploadPercentage = progress;
    // }, function (error) {
    //   // Handle unsuccessful uploads
    //   console.log(error);
    // }, function () {
    //   const snapshot = comp.uploadTask.snapshot;
    //   // comp.dbRef.child('photos').push({
    //   //   clickedBy: comp.user,
    //   //   url: snapshot.downloadURL,
    //   //   details: comp.image.details ? comp.image.details : '',
    //   //   caption: comp.image.caption ? comp.image.caption : '',
    //   //   name: file.name
    //   // }).then((snap) => {
    //   //   //comp.dbRef.child(appConstants.USERS + comp.user.uid + appConstants.USERPHOTOS).push({ pid: snap.key });
    //   // });
    //   comp.uploadDone = true;
    //   comp.uploading = false;
    // });
  }

  cancelUpload() {
    // if (this.uploadTask) {
    //     this.dialogRef.close(this.uploadTask);
    //     if (!this.uploadDone) {
    //         this.ts.showMessage(appMessages.uploadNotification);
    //     }
    // }
    // else {
    this.dialogRef.close();
    // }
  }




  ngOnInit() {
    // this.AuthService.fbauth.authState.subscribe((auth) => {
    //     if (auth == null) {
    //         this.router.navigate(['/login']);
    //     } else {
    //         this.user.displayName = auth.displayName ? auth.displayName : appConstants.ADMIN;
    //         this.user.photoUrl = auth.photoURL ? auth.photoURL : appConstants.DEFAULTPHOTO;
    //         this.user.email = auth.email;
    //         this.user.uid = auth.uid;
    //         // this.dialogRef.updatePosition({ top: '66px', right: '2px' });
    //     }
    // });
  }
}

