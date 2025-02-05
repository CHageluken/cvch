import { Component } from '@angular/core';
import { Cypher } from 'src/app/cvmodule/share/cypher';

@Component({
  selector: 'app-master-se',
  templateUrl: './master-se.component.html'
})
export class MasterSeComponent {
  masterTitle: string = "Master Software Engineering";
  cijfers: Cypher[] =[
    {punt:"7", vak:"Software quality management", ouLink:"https://www.ou.nl/en/-/im0603_design-for-change"},
    {punt:"7", vak:"Design for change", ouLink:"https://www.ou.nl/en/-/im0703_software-quality-management"},
    {punt:"8", vak:"Software architecture", ouLink:"https://www.ou.nl/en/-/software-architecture"},
    {punt:"7", vak:"System verification and testing", ouLink:"https://www.ou.nl/en/-/im0903_system-verification-and-testing"},
    {punt:"7", vak:"Software security", ouLink:"https://www.ou.nl/en/-/im0803_software-security"}
    ]
}
