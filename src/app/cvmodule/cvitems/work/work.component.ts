import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
   constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/cvitems/work/ict']);
  }
}
