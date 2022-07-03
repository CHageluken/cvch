import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfotableComponent } from './infotable/infotable.component';
import { TitleNComponent } from './titleN/titleN.component';
import { PopupreturnComponent } from './popupreturn/popupreturn.component';
import { InfolineComponent } from './infoline/infoline.component';
import { InfoworkComponent } from './infowork/infowork.component';

@NgModule({
  declarations: [
    TitleNComponent,
    InfotableComponent,
    InfolineComponent,
    InfoworkComponent,
    PopupreturnComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    TitleNComponent,
    InfotableComponent,
    InfolineComponent,
    InfoworkComponent, 
    PopupreturnComponent
  ]
})
export class ShareModule { }
