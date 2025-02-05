import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HobbiesComponent } from './hobbies/hobbies.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { LanguageComponent } from './language/language.component';
import { EducationComponent } from './education/education.component';
import { CoursesComponent } from './courses/courses.component';
import { WorkModule } from './work/work.module';
import { ShareModule } from '../share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkComponent } from './work/work.component';
import { OrganonComponent } from './popup/organon/organon.component';
import { BeeyondComponent } from './popup/beeyond/beeyond.component';
import { QfactorsComponent } from './popup/qfactors/qfactors.component';
import { SligroComponent } from './popup/sligro/sligro.component';
import { PublicationsComponent } from './popup/publications/publications.component';
import { StudyComponent } from './popup/study/study.component';
import { LuzacComponent } from './popup/luzac/luzac.component';
import { SondervickComponent } from './popup/sondervick/sondervick.component';
import { SligrostageComponent } from './popup/sligrostage/sligrostage.component';
import { SmartfloorComponent } from './popup/smartfloor/smartfloor.component';

@NgModule({
  declarations: [
    CoursesComponent,
    EducationComponent,
    HobbiesComponent,
    KnowledgeComponent,
    LanguageComponent,
    WorkComponent,
    
    OrganonComponent,
    BeeyondComponent,
    QfactorsComponent,
    SligroComponent,
    SligrostageComponent,
    SmartfloorComponent,
    PublicationsComponent,
    StudyComponent,
    LuzacComponent,
    SondervickComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    WorkModule,
    ShareModule
  ],
  exports: [
    CoursesComponent,
    EducationComponent,
    HobbiesComponent,
    KnowledgeComponent,
    LanguageComponent,
    WorkModule,
    ShareModule
  ]
})
export class CvItemsModule { }
