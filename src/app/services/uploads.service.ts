import { Injectable } from '@angular/core';

@Injectable()
export class UploadsService {
  uploads: Array<any> = [];
  constructor() { }
  addTask(task) {
    this.uploads.push(task);
  }
  removeTask() {

  }

}
