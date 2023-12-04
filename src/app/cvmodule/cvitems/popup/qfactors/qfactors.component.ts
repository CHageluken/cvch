import { Component} from '@angular/core';
import { InfoWork } from 'src/app/cvmodule/share/infowork/infowork.component';

@Component({
  selector: 'app-qfactors',
  templateUrl: './qfactors.component.html'
})
export class QfactorsComponent {
  constructor() { }

  works: InfoWork[] = [
    { period: "2019 - jan 2022",
      task: "Functionaliteit verbeteren",
      project: [
        "Via diverse kanalen (sales, internet) komen continu suggesties voor aanvullingen binnen. Daarnaast is een product nooit af. Er zijn altijd wel dingen die beter kunnen of die gewoon fout zijn. Dit gebeurt gedurende de gehele ontwikkeltijd."],
      description: [
        " • Frontend en backend aanpassen daar waar nodig is",
        " • Scrum master: planning bijhouden en Sprints meetings organiseren."],
      keyword: "Java 8, Angular 11, Spring,Scrum"},
    { period: "2021", 
      task: "Extra modules",
      project: ["Drie extra modules gemaakt.", 
        "• Een module voor verenigingen waarmee ze de ledenadministratie kunnen uitvoeren;",
        "• Een module waarmee uitzendbureaus zelf de urenregistratie kunnen goedkeuren in plaats van goedkeuring door het afdelingshoofd binnen de firma van de werknemer;",
        "• Een module voor management waarmee QFactors b.v. nieuwe firma’s kan toevoegen.",
        "De relatie module en de management module zijn standalone modules. De ledenmodule moet dit in de toekomst ook worden. Momenteel is het onderdeel van het totaalpakket."],
      description: [
        "• Frontend module gemaakt (formulieren, overviews, dashboard)",
        "• Routing in Angular gewijzigd, ledenadministratie module toegevoegd",
        "• Database tabellen gedefinieerd en aangemaakt",
        "• Java services in backend aangemaakt, controller opgezet."],
    keyword: "Java 8, Angular 11, Spring"},
    { period: "nov 2019 - jan 2022",
      task: "Refactoring frontend/backend",
      project: [
        "Frontend meer toegespitst op presentatie van gegevens. Veel van de frontend scripts waren een vorm van retrievals. Als dit in de backend al is uitgevoerd dan neemt de datatransfer af ", 
        "Frontend geconverteerd naar Java 11. Backend opgesplitst in standaard Spring packages zoals: controller, repository, services, model."], 
      description: [
        "• JavaScript in frontend aangepast;",
        "• Java packages aangepast;",
        "• Nieuwe retrievals geschreven;",
        "• Services en/of controllers uitgebreid of nieuw toegevoegd;",
        "• Modellen uitgebreid of nieuw toegevoegd."],
      keyword: "Java 8, Angular 11, Spring"},
      { period: " aug 2019",
        task: "Server transfer",  
        project: [
          "Bij aanvang van mijn werkzaamheden voor QFactors stond de test en development samen op een server en de productieversie op een andere server. De directeur wilde overgaan op een andere server-provider en bovendien alles op één server. Ik heb deze transfer volledig uitgevoerd."],
        description: [
          "• Server inrichten met programmatuur (Tomcat, PostGreSQL, Python, NodeJS, etc.)",
          "• Database ingericht",
          "• Startup scripts voor de applicatie geschreven (Linux)",
          "• Data transfer m.b.v. een eigenhandig geschreven Java applicatie"],
        keyword: "Java 8, Tomcat, Tomcat, PostGreSQL, Python, NodeJS, Putty, FTP"}
  ];
}
