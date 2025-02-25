import { Component } from '@angular/core';

export interface InfoKnow {
  header: string;
  content: string;
}
@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html'
})
export class KnowledgeComponent {

  constructor() { }

  knows:InfoKnow [] = [
    {header: "Programmeertalen",
     content: "Java 7/8/11/17, Python, HTML 4/5, Basic en Pascal, Haskell"},    
    {header: "Scripttalen",
     content: "JavaScript, TypeScript"},
    {header: "Querytalen",
     content: "MySQL, PostgreSQL, Xquery, noSQL (OrientDB)"},
    {header: "Framework",
     content: "Angular JS/5/6/11/14, Sass, React(basics), Spring, Vaadim 7/8, Hibernate, Swing, EJB, JEE, Selenium, JUnit 4/5, MockMVC, Gradle, Maven, Node JS, JavaScript, Vaadim, Swagger, Gherkin"},    
    {header: "Web", 
     content: "XML, REST, SOAP, WSDL, JSP, JSTL, YAML"},
    {header: "DevOps", 
     content: "Git (GitHub, Bitbucket, SourceTree), Jenkins, Jira, Subversion(TortoiseSVN), Gitea"}, 
    {header: "Tools/packages", 
     content: "IntelliJ, Eclipse, Yupiter Notebook, MS Visual Studio, Visual Studio Code, MS Office, LucidChart, Draw.io, Bootstrap, Angular Materials, SCSS"}, 
    {header: "Operating systems", 
     content: "Windows, Linux"}, 
    {header: "Statistiek", 
     content: "SAS, Statbase"}];
}
