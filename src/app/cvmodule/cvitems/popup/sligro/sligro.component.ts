import { Component} from '@angular/core';
import { InfoWork } from 'src/app/cvmodule/share/infowork/infowork.component';

@Component({
  selector: 'app-sligro',
  templateUrl: './sligro.component.html'
})
export class SligroComponent {

  constructor() { }

works: InfoWork[] = [
   { period: "2018",
      task: "module LDB (Lever Datum Bepaling)",
      project: [
        "LDB is een module waarmee diverse REST services worden gemaakt. Deze services bepalen onder verschillende voorwaarden de optimale leverdatum van goederen. Klanten, leveranciers en Sligro zelf gebruiken deze module in diverse toepassingen. Het is een vrij uitgebreide module waarin veel business rules geïmplementeerd zijn."], 
      description: [
        "• Aanpassen van rekenregels",
        "• Aanpassen van data die uit een database gehaald worden (caching)",
        "• Documentatie genereren met behulp van Swagger (OPEN API)",
        "• Backend en Frontend scheiden in aparte Java projecten",
        "• Opstellen regels voor Frontend server",
        "• Frontend maken met Angular JS, Angular 5 en Angular 6",
        "• Foutmeldingen en waarschuwingen minimaliseren",
        "• Actief deelnemen in Scrum team"],
      keyword: "Java 7, Angular JS/5/6, Swagger, business rules, caching, Git, Jira, Scrum"},
      { period: "2018", 
      task: "Ordersysteem",
      project: [
        "Het ordersysteem van Sligro is gedeeltelijk toegankelijk via IBM systeem. Dit order systeem wordt via een emulatie op een pc onderhouden met RPG programmatuur. Ik heb uitgezocht hoe je testen van dit systeem kunt automatiseren in Java, gebruik makend van een laptop.",
        "RPG = Report Program Generator, programmeertaal uit de jaren zestig, die tot op heden met name wordt gebruikt door programmeurs op de IBM System i-midrangesystemen van IBM."],
      description: [
        "• Uitzoeken hoe de transfer werkt (contact gehad met IBM US)",
        "• Tekst van scherm afvangen",
        "• Objecten marshallen en unmarshallen"],
      keyword: "Java 7, IBM, marshalling/unmarshalling"}    
  ];
}


