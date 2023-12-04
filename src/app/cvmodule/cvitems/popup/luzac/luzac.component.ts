import { Component } from '@angular/core';
import { InfoLine } from 'src/app/cvmodule/share/infoline/infoline.component';

@Component({
  selector: 'app-luzac',
  templateUrl: './luzac.component.html'
})
export class LuzacComponent {

  constructor() { }

  lines: InfoLine = 
    { period: "2012-2013",
      remark1: "Co-auteur vakwerkplan wiskunde voor alle Luzac vestigingen"}
  ;

}
	
