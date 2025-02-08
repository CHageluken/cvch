import { Component } from '@angular/core';
export interface Cypher {
  v1: string;
  v2: string;
  p1: string;
  p2: string; 
}

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html'
})
export class StudyComponent {

  constructor() { }
  cijfers: Cypher[] =[
  {p1:"8", v1:"OO programmeren in Java 1",
   p2:"8", v2:"Inleiding Informatica"}, 
  {p1:"7", v1:"OO programmeren in Java 2", 
   p2:"8", v2:"Web cultuur"}, 
  {p1:"7", v1:"OO analyseren en ontwerpen", 
   p2:"6", v2:"Communicatietechnologie"}, 
  {p1:"7", v1:"Webapplicaties: de cliëntkant", 
   p2:"8", v2:"De werking van computersystemen"}, 
  {p1:"6", v1:"Model-Driven Development", 
   p2:"9", v2:"Functioneel programmeren"}, 
  {p1:"9", v1:"Databases", 
   p2:"7", v2:"Formele talen en automaten"}, 
  {p1:"8", v1:"Ontwikkelpracticum", 
   p2:"8", v2:"Kunstmatige intelligentie"}, 
  {p1:"7", v1:"Propedeuse project", 
   p2:"7", v2:"Security en IT"}, 
  {p1:"7", v1:"Webapplicaties: de serverkant", 
   p2:"10", v2:"Logica en informatica"}, 
  {p1:"8", v1:"Concepten van programmeertalen",  
   p2:"7", v2:"Besturingssystemen"}, 
  {p1:"6", v1:"Datastructuren en algoritmen", 
   p2:"8", v2:"Procesmodelleren"}, 
  {p1:"10", v1:"XML: theorie en toepassingen", 
   p2:"v", v2:"Academische vaardigheden 1 en 2"}, 
  {p1:"7", v1:"Software Engineering", 
   p2:"7", v2:"Context van informatica"} 
  ]

}
