import { Component } from '@angular/core';
import { InfoShape } from '../../../share/infotable/infotable.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html'
})
export class SchoolComponent {
  shapes: InfoShape[] = [
    { image2: "assets/images/work/avans-logo.png",
      company: "Avans, Den Bosch/Tilburg",
      period: "aug 2012 – apr 2013",
      remark1: "AB&I (detacheerbasis)"},
    { image2: "assets/images/work/luzac-logo.png",
      company: "Luzac college, Den Bosch (speciaal onderwijs)",
      period: "aug 2012 – jun 2013",
      remark1: "1-jarige opleiding bovenbouw havo/vwo",
      link1: "luzac"
    },
    { image2: "assets/images/work/sondervick-logo.png",
      company: "Sondervick college, Veldhoven",
      period: "aug 2008 - jul 2012",
      remark1: "bovenbouw havo/vwo, tweetalig onderwijs",
      link1: "sondervick"
    },
    { image2: "assets/images/work/merlet-logo.png",
      company: "Merletcollege, Grave",
      period: "2007/2008",
      remark1: "bovenbouw havo/vwo"},
    { image2: "assets/images/work/commanderij-logo.png",
      company: "Commanderijcollege, Gemert",
      period: "mrt 2006 – aug 2007",
      remark1: "bovenbouw havo/vwo"},
  ];

  constructor() { }  
}
