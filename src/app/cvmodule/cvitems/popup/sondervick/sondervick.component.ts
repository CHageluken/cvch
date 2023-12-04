import { Component } from '@angular/core';
import { InfoLine } from 'src/app/cvmodule/share/infoline/infoline.component';

@Component({
  selector: 'app-sondervick',
  templateUrl: './sondervick.component.html'
})
export class SondervickComponent  {

  lines: InfoLine[] = [
    { period: "juli 2011",
      remark1: "Begeleider bij de Internationale Wiskunde Olympiade in Amsterdam"},
    { period: "2009-2012",
      remark1: "lid van het regionaal steunpunt wiskunde D, zowel voor vwo (samenwerking met TUE) als havo (samenwerking met Fontys)"},
    { period: "  2009-2011",
      remark1: "projectleider van een digitaliseringproject op het Sondervick college in samenwerking met het St Joriscollege en uitgeverij Noordhoff"},
  ];
  constructor() { }
}
