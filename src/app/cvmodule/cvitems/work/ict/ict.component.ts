import { Component } from '@angular/core';
import { InfoShape } from 'src/app/cvmodule/share/infotable/infotable.component';

@Component({
  selector: 'app-ict',
  templateUrl: './ict.component.html'
})

export class IctComponent {
  shapes: InfoShape[] = [
    { image2: "assets/images/work/sligro-logo.png",
      company:  "Sligro, Veghel",
      period: "dec 2016 – mrt 2017",
      remark1: "stage",
      remark2: "(test engineer, website designer en Java ontwikkelaar)",
      link1: "sligrostage"},
    { image2: "assets/images/work/sligro-logo.png",
      company:  "Sligro, Veghel",
      period: "jun 2017- nov 2018",
      remark1: "Java ontwikkelaar",
      link1: "sligro"},
    { image2: "assets/images/work/qfactors_logo.gif",
      company:  "QFactors bv, Doetinchem",
      period: "aug 2019 - jan 2022",
      remark1: "Full stack Java developer",
      link1: "qfactors"
    }
  ];

  item: InfoShape = this.shapes[0];

  constructor() { }
}
