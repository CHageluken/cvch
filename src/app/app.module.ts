import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './cvmodule/home/home.component';
import { MotivationComponent } from './cvmodule/cvitems/motivation/motivation.component';
import { SidebarComponent } from './cvmodule/share/sidebar/sidebar.component';
import { CvItemsModule } from './cvmodule/cvitems/cvitems.module';
import { CvItemsComponent } from './cvmodule/cvitems/cvitems.component';
import { WorkModule } from './cvmodule/cvitems/work/work.module';
import { ShareModule } from './cvmodule/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './cvmodule/share/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotivationComponent,
    CvItemsComponent,
    SidebarComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CvItemsModule,
    WorkModule,
    ShareModule
  ],
  exports: [
    CvItemsModule,
    WorkModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
