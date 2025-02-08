import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CvItemsService {
  linkChanged = new Subject<string>();
  private currentlink = "home";
  private previouslink = "";

  constructor() { }

  getCurrentlink () {
    return this.currentlink;
  }

  setCurrentlink (val: string) {
    this.currentlink = val;
  }

  getPreviouslink () {
    return this.previouslink;
  }

  setPreviouslink (val: string) {
    this.previouslink = val;
  }

  changeLink(val:string) {
    this.setPreviouslink(this.currentlink);
    this.setCurrentlink(val.replace('work/',''));
    this.linkChanged.next(val);
  }
}
