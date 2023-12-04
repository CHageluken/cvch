import { Component } from '@angular/core';
import { InfoShape } from '../../../share/infotable/infotable.component';

@Component({
  selector: 'app-ict',
  templateUrl: './ict.component.html'
})

export class IctComponent {
  shapes: InfoShape[] = [
    { image2: "assets/images/work/smartfloor3.png",
      company: "Smart Floor (Connective Floors bv), Eindhoven",
      period: "sep 2023 - heden",
      remark1: "Backend Java developer, statisticus",
      link1: "smartfloor"
    },
    { image2: "assets/images/work/beeyond.png",
      company: "Beeyond bv, Eindhoven",
      period: "sep 2022 - mrt 2023",
      remark1: "Developer",
      link1: "beeyond"
    },
    { image2: "assets/images/work/qfactors_logo.gif",
      company:  "QFactors bv, Doetinchem",
      period: "aug 2019 - jan 2022",
      remark1: "Full stack Java developer",
      link1: "qfactors"
    },
    { image2: "assets/images/work/sligro-logo.png",
      company:  "Sligro, Veghel",
      period: "jun 2017 - nov 2018",
      remark1: "Java ontwikkelaar",
      link1: "sligro"},
    { image2: "assets/images/work/sligro-logo.png",
      company:  "Sligro, Veghel",
      period: "dec 2016 – mrt 2017",
      remark1: "stage",
      remark2: "(test engineer, website designer en Java ontwikkelaar)",
      link1: "sligrostage"}
    
  ];

  item: InfoShape = this.shapes[0];

  constructor() { }
}
