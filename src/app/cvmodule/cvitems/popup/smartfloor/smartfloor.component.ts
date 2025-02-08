import { Component, Output } from '@angular/core';
import { InfoWork } from '../../../share/infowork/infowork.component';

@Component({
  selector: 'app-smartfloor',
  templateUrl: './smartfloor.component.html'
})
export class SmartfloorComponent {
  @Output() smartfloor = "http://www.smartfloor.com";
  
  works: InfoWork[] = [
    { period: "2023 sep - heden",
    task: "Functionaliteit verbeteren",
    project: [
      "Wanneer een persoon over een Smart Floor loopt, worden allerlei loopparameters gemeten die opgeslagen en verwerkt moeten worden."
          ],
    description: [
      "•	Verantwoordelijk voor de ontwikkeling van de backend systemen van Smart Floor (Java)",
      "•	Nieuwe functionaliteit toevoegen aan Vitality app (platform van Smart Floor)",
      "•	Wiskunde/statistiek/AI inzetten bij onderzoek en ontwikkeling van toepassingen die het platform verbeteren (Python)",
      "•	Opslag beheren (AWS), database migratie (SQL, noSQL)"],
    keyword: "Java 17, Python, React, AWS, Jira, Spring, Scrum, Orient DB, NoSql"},   
   ];
 }

