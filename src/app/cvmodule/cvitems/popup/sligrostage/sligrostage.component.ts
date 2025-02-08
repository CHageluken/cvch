import { Component } from '@angular/core';
import { InfoWork } from 'src/app/cvmodule/share/infowork/infowork.component';

@Component({
  selector: 'app-sligrostage',
  templateUrl: './sligrostage.component.html'
})
export class SligrostageComponent {

  constructor() { }

  works: InfoWork = 
    { period: "2017", 
      task: "Testen",
      project: ["Om producten te voorzien van etiketten moet gebruik worden gemaakt van een grote database met informatie over de samenstelling. De tekst die uiteindelijk beschikbaar komt voor de etiketten wordt regelmatig getest."],
      description: ["Aanvankelijk heb ik zelf testen geschreven met behulp van Selenium.  Uiteindelijk heb ik de beschikbare basis programmatuur die voor iedere test gebruikt wordt gerefactored en beschikbaar gesteld als .jar file voor andere afdeling. Inclusief Java documentatie"],
      keyword: "Java 7, Selenium, SQL, Java doc"};
}
