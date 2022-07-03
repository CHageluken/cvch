import { Component } from '@angular/core';
import { InfoShape } from '../../share/infotable/infotable.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent {
  shapes: InfoShape[] = [
  { image1: "assets/images/education/OULogo.jpg",
    company: "Open Universiteit",
    period: "2013 - heden",
    remark1: "Bachelor: Propedeuse Informatica (2015)",
    remark2: "Bachelor Informatica (april 2019)",
    remark3: "Master Software Engineering (juli 2022)",
    link1: "study"
  },
  { image2: "assets/images/education/LUCLogo.png",
    company: "Universiteit Hasselt, België",
    period: "1991 - 1997",
    remark1: "Postgraduate Masters Degree in Biostatistiek"
  },
  { image2: "assets/images/education/TUELogo.png",
    company: "Technische Universiteit Eindhoven",
    period: "1981 - 1987",
    remark1: "Wiskundig ingenieur (Faculteit Wiskunde en Informatica)",
    remark2: "Inclusief eerstegraads lesbevoegdheid voor Wiskunde"
  },
  { image2: "assets/images/education/vmlLogo.png",
    company: "Van Maerlantlyceum, Eindhoven",
    period: "1974 - 1980",
    remark1: "Gymnasium B"
  }];

  constructor() { }
}
