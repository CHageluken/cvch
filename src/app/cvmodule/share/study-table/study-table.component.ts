import { Component, Input } from '@angular/core';
import { Cypher } from '../cypher';
@Component({
  selector: 'app-study-table',
  templateUrl: './study-table.component.html'
})
export class StudyTableComponent {
  @Input() pakket: Cypher[] = [];
  @Input() masters: string = "Master ";
}
