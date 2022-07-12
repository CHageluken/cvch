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
    {header: "Framework",
     content: "Angular JS/5/6/11, Spring, Hibernate, Swing, EJB, JEE,Selenium, JUnit, MockMVC, Gradle, Maven, Node JS, JavaScript, Vadim, Swagger, Gherkin"},    
    {header: "Web", 
     content: "XML, REST, SOAP, JSP, JSTL, YAML"},
    {header: "Talen", 
     content:"Java 7/8/11, JavaScript, HTML 4/5, Sass, MySQL, PostGreSQL, XQuery, Python, Basic and Pascal, Haskell"}, 
    {header: "DevOps", 
     content: "Git (GitHub, Bitbucket, SourceTree), Jenkins, Jira, Subversion/ortoiseSVN, Gitea"}, 
    {header: "Basis", 
     content: "Excel, PowerPoint, Word, Outlook"}, 
    {header: "Statistiek", 
     content: "SAS, Statbase"}]; 
}
