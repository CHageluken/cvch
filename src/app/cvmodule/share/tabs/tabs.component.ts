import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CvItemsService } from '../../cvitems.service';

export interface CvItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app_tabs',
  templateUrl: './tabs.component.html'
})

export class TabsComponent implements OnInit {

  sub: Subscription = new Subscription();
  @Input() currentlink = this.cvitemsService.getCurrentlink();

  constructor(private cvitemsService: CvItemsService) {}

  ngOnInit(): void {
    this.sub = this.cvitemsService.linkChanged
      .subscribe(
        (currentlink: string) => {
          this.currentlink = currentlink;
        }
      );
  }

  cvitems:CvItem[] = [
    {title: "Motivatie", link: "motivation"},
    {title: "Opleiding", link: "education"},    
    {title: "Werk", link: "work"}, 
    {title: "IT kennis", link: "knowledge"}, 
    {title: "Talen", link: "language"} ,
    {title: "Cursussen", link: "courses"} ,
    {title: "Vrije tijd", link: "hobbies"},
    {title: "Home", link:""}
  ]; 

  routeChange(link:string) {
    this.currentlink = link;
    this.cvitemsService.changeLink(link);
  }

  compare(currentlink: string, itemlink: string): boolean {
    if (currentlink.includes('work')) {
      return itemlink.includes('work')
    } else return itemlink == currentlink;
  }
}
