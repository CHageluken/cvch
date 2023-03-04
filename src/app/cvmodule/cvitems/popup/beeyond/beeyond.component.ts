import { Component} from '@angular/core';
import { InfoWork } from 'src/app/cvmodule/share/infowork/infowork.component';

@Component({
  selector: 'app-beeyond',
  templateUrl: './beeyond.component.html'
})
export class BeeyondComponent {
  constructor() { }

  works: InfoWork[] = [
    { period: "2022 sep - mrt 2023",
      task: "Functionaliteit verbeteren",
      project: [
        "Via diverse klanten komen continu suggesties voor aanvullingen binnen. Daarnaast is een product nooit af. Er zijn altijd wel dingen die beter kunnen of die gewoon fout zijn. Dit gebeurt gedurende de gehele ontwikkeltijd"],
      description: [
        "•	Frontend en backend verbeteren",
        "•	Nieuwe functionaliteit toevoegen",
        "•	Fouten herstellen",
        "•	Database migratie"],
      keyword: "Java 17, Vaadim, Elasticsearch, Bamboo, Jira, Linux, Spring, Scrum, Orient DB, NoSql"},
    
  ];
}
