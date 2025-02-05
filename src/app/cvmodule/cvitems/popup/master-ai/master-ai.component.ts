import { Component } from '@angular/core';
import { Cypher } from 'src/app/cvmodule/share/cypher';

@Component({
  selector: 'app-master-ai',
  templateUrl: './master-ai.component.html'
})
export class MasterAiComponent {
masterTitle: string = "Master Artificial Intelligence";
cijfers: Cypher[] =[
  {punt:"8,0", vak:"Key Topics in AI", ouLink:"https://www.ou.nl/en/-/im0712_key-topics-in-artificial-intelligence"}, 
  {punt:"8,1", vak:"Research Methods for AI", ouLink:"https://www.ou.nl/en/-/im1312_research-methods-for-artificial-intelligence"}, 
  {punt:"7,4", vak:"Machine Learning", ouLink:"https://www.ou.nl/en/-/im1002_machine-learning"}, 
  {punt:"7,9", vak:"Bayesian Reasoning and Learning", ouLink:"https://www.ou.nl/en/-/im0902_bayesian-reasoning-and-learning"}, 
  {punt:"9,0", vak:"Responsible AI", ouLink:"https://www.ou.nl/en/-/im0802_responsible-artificial-intelligence"}, 
  {punt:"8,2", vak:"Deep Neural Engineering", ouLink:"https://www.ou.nl/en/-/im1102_deep-neural-engineering"}, 
  {punt:"   ", vak:"Model-Based AI", ouLink:"https://www.ou.nl/en/-/im1202_model-based-artificial-intelligence"}, 
  {punt:"   ", vak:"Capita Selecta in AI", ouLink:"https://www.ou.nl/en/-/im1402_capita-selecta-in-artificial-intelligence"},
  ]
}