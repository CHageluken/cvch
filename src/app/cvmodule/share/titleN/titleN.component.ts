import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titlen',
  templateUrl: './titleN.component.html'
})
export class TitleNComponent {
  @Input() title!: string;
  @Input() titleno!: string;
  @Input() titlehook!: string;
 
  constructor() { }
}
