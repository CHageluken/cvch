import { Component } from '@angular/core';
import { InfoShape } from 'src/app/cvmodule/share/infotable/infotable.component';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html'
})
export class PharmacyComponent {
  shapes: InfoShape[] = [
    { image2: "assets/images/work/organon.png",
      company: "NV Organon, Oss",
      period: "1988-2006",
      remark1: "Statisticus",
      link1: "organon"
    },
    { image2: "assets/images/work/catharina-logo.png",
      company:  "Catharina ziekenhuis, Eindhoven",
      period: "1996-1997",
      remark1: "Statisticus (bijbaan)",
      link1: "publications"
    },
  ];

  constructor() { }
}
