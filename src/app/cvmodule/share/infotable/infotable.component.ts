import { Component, Input } from '@angular/core';

export interface InfoShape {
  image1?: string;
  image2?: string;
  company: string;
  period: string;
  remark1: string;
  remark2?: string;
  remark3?: string;
  link1?: string;
}

@Component({
  selector: 'app-infotable',
  templateUrl: './infotable.component.html'
})
export class InfotableComponent {
  @Input() info!: InfoShape;

  constructor() { }
}
