import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IctComponent } from './ict/ict.component';
import { SchoolComponent } from './school/school.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [
    IctComponent,
    SchoolComponent,
    PharmacyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ShareModule
  ],
  exports: [
    IctComponent,
    SchoolComponent,
    PharmacyComponent
  ]
})
export class WorkModule { }
