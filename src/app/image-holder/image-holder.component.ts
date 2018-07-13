import { appConstants } from './../appconstant';
import { AngularFireDatabase } from 'angularfire2/database';
import { Image } from './../image';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css']
})
export class ImageHolderComponent implements OnInit {

  @Input() image: Image;
  // @Output() userSelected = new EventEmitter<any>();
  constructor(public db: AngularFireDatabase) {
  }

  ngOnInit() {

  }
  favorite() {
    const imageData = this.db.object(appConstants.PHOTOS + this.image.$key);
    if (this.image.favorite === undefined) {
      this.image.favorite = 0;
    }
    this.image.favorite++;
    imageData.set(this.image); // save the data
  }
  }




