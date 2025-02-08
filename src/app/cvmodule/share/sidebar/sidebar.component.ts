import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app_sidebar',
  templateUrl: './sidebar.component.html'
}) 

export class SidebarComponent implements OnInit {
  @Output() linkedIn = "http://www.linkedin.com/in/Conny-Hageluken";
  sidebarForm!:FormGroup;
  enter = "%0d";
  @Input() subject = "CV opvragen (LinkedIn)";
  @Input() body = "";
  
  constructor() {}

  ngOnInit() {
    this.body = "Beste Conny" + this.enter + this.enter +
    "Ik wil graag een PDF versie van je CV opvragen" + this.enter + this.enter +
    "reden: " + this.enter + this.enter +
    "aanvrager: " + this.enter;
    

    this.sidebarForm = new FormGroup({
      'naam': new FormControl("Conny Hageluken-Paping"),
      'adres': new FormControl("Robijnring 18"),
      'plaats':  new FormControl("Eindhoven"),
      'telefoon':  new FormControl("040-2419409 / 06-24633892"),
      'email':  new FormControl("Conny.Hageluken@kpnmail.nl"),
      'geboortedatum':  new FormControl("27 november 1961"),
      'geboorteplaats':  new FormControl("Valkenswaard"),
      'nationaliteit':  new FormControl("Nederlandse")
    });
  }

  get naam () {
    return this.sidebarForm.get('naam') as FormControl; 
  }

  get adres () {
    return this.sidebarForm.get('adres') as FormControl; 
  }

  get 'plaats'() {
    return this.sidebarForm.get('plaats') as FormControl; 
  }
   
  get 'telefoon'() {
    return this.sidebarForm.get('telefoon') as FormControl;
  };

get 'email'() {
    return this.sidebarForm.get('email') as FormControl; 
   }
  get 'geboortedatum'() {
    return this.sidebarForm.get('geboortedatum') as FormControl;
  };

  get 'geboorteplaats'() {
    return this.sidebarForm.get('geboorteplaats') as FormControl; 
  }

  get 'nationaliteit'() {
    return this.sidebarForm.get('nationaliteit') as FormControl; 
  }
}
