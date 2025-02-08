import { Component, Input } from '@angular/core';

export interface InfoWork {
  period: string;
  task: string;
  project?: string[];
  description?: string[];
  keyword?: string;
}
@Component({
  selector: 'app-infowork',
  templateUrl: './infowork.component.html'
})
export class InfoworkComponent {
  @Input() info!: InfoWork;

  constructor() { } 
}
