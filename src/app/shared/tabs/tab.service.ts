import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TabService {

  constructor() { }

  tabSelected = new EventEmitter();


  changedTab(tab){
    this.tabSelected.emit();
  }

}
