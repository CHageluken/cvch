import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CvItemsService } from '../../cvitems.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
  
  constructor(
    private router: Router,
    private cvitemsService: CvItemsService) { }

  ngOnInit() {
    this.router.navigate(['/cvitems/work/ict']);
    this.cvitemsService.changeLink('work/ict');
  }
  routeChange(link:string) {
    this.cvitemsService.changeLink(link);
  }
}
