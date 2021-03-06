import { Component, Input } from '@angular/core';

export interface InfoLine {
  period: string;
  remark1: string;
}
@Component({
  selector: 'app-infoline',
  templateUrl: './infoline.component.html'
})
export class InfolineComponent {
  @Input() info!: InfoLine;

  constructor() { }
}
