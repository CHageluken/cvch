import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CvItemsService } from '../cvitems.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  sub: Subscription = new Subscription();
  @Input() currentlink = this.cvitemsService.getCurrentlink();

  constructor(
    private cvitemsService: CvItemsService,
    private router: Router) {}

  ngOnInit(): void {
    this.cvitemsService.setCurrentlink("home");
  }

  routeChange(link:string) {
    this.currentlink = link;
    this.cvitemsService.changeLink(link);

    this.router.navigate(['/cvitems',link]);
  }
}
