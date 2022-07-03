import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
}) 

export class SidebarComponent implements OnInit {
  @Output() linkedIn = "http://www.linkedin.com/in/Conny-Hageluken";
  personalForm!:FormGroup;
    
  constructor() {}

  ngOnInit() {
    this.personalForm = new FormGroup({
      'naam': new FormControl("Conny Hageluken-Paping"),
      'adres': new FormControl("Robijnring 18"),
      'plaats':  new FormControl("Eindhoven"),
      'telefoon':  new FormControl("040-2419409/06-24633892"),
      'email':  new FormControl("Conny.Hageluken@kpnmail.nl"),
      'geboortedatum':  new FormControl("27 november 1961"),
      'geboorteplaats':  new FormControl("Valkenswaard"),
      'nationaliteit':  new FormControl("Nederlandse")
    });
  }

  get naam () {
    return this.personalForm.get('naam') as FormControl; 
  }

  get adres () {
    return this.personalForm.get('adres') as FormControl; 
  }

  get 'plaats'() {
    return this.personalForm.get('plaats') as FormControl; 
  }
   
  get 'telefoon'() {
    return this.personalForm.get('telefoon') as FormControl;
  };

get 'email'() {
    return this.personalForm.get('email') as FormControl; 
   }
  get 'geboortedatum'() {
    return this.personalForm.get('geboortedatum') as FormControl;
  };

  get 'geboorteplaats'() {
    return this.personalForm.get('geboorteplaats') as FormControl; 
  }

  get 'nationaliteit'() {
    return this.personalForm.get('nationaliteit') as FormControl; 
  }
}
