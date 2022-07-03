import { Component } from '@angular/core';
import { InfoShape } from '../../share/infotable/infotable.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  shapes: InfoShape[] = [
    { image2: "assets/images/work/udemy.png",
      company: "Udemy",
      period: "2021 - heden",
      remark1: "Angular (sep 2021)), Sass(nov 2021), Docker en Jenkins (heden)"
    },

    { image1: "assets/images/work/badge-psmi.png",
      company: "PSM",
      period: "2018",
      remark1: "SCRUM master PSM 1"
    },

    { image2: "assets/images/work/sligro-logo.png",
      company: "Sligro intern",
      period: "2018",
      remark1: "XP,  Supply Chain Management"
    },

    { image2: "assets/images/work/organon.png",
      company: "Organon intern",
      period: "1990",
      remark1: "Onderhandelen, Conflict hanteren,Presentatietechniek,",
      remark2: "Scientific Report, WritingPharmaco-kinetiek"
    },

    { image2: "assets/images/work/SAS_logo.png",
      company: "SAS institute",
      period: "1990",
      remark1: "Bijscholing statistiek"
    },
  ]

  constructor() { }
}
