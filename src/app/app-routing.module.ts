import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvItemsComponent } from './cvmodule/cvitems/cvitems.component';
import { MotivationComponent } from './cvmodule/cvitems/motivation/motivation.component';
import { HomeComponent } from './cvmodule/home/home.component';
import { EducationComponent } from './cvmodule/cvitems/education/education.component';
import { CoursesComponent } from './cvmodule/cvitems/courses/courses.component';
import { HobbiesComponent } from './cvmodule/cvitems/hobbies/hobbies.component';
import { LanguageComponent } from './cvmodule/cvitems/language/language.component';
import { WorkComponent } from './cvmodule/cvitems/work/work.component';
import { KnowledgeComponent } from './cvmodule/cvitems/knowledge/knowledge.component';
import { IctComponent } from './cvmodule/cvitems/work/ict/ict.component';
import { SchoolComponent } from './cvmodule/cvitems/work/school/school.component';
import { PharmacyComponent } from './cvmodule/cvitems/work/pharmacy/pharmacy.component';
import { BeeyondComponent } from './cvmodule/cvitems/popup/beeyond/beeyond.component';
import { QfactorsComponent } from './cvmodule/cvitems/popup/qfactors/qfactors.component';
import { OrganonComponent } from './cvmodule/cvitems/popup/organon/organon.component';
import { SligroComponent } from './cvmodule/cvitems/popup/sligro/sligro.component';
import { SligrostageComponent } from './cvmodule/cvitems/popup/sligrostage/sligrostage.component';
import { PublicationsComponent } from './cvmodule/cvitems/popup/publications/publications.component';
import { SondervickComponent } from './cvmodule/cvitems/popup/sondervick/sondervick.component';
import { LuzacComponent } from './cvmodule/cvitems/popup/luzac/luzac.component';
import { SmartfloorComponent } from './cvmodule/cvitems/popup/smartfloor/smartfloor.component';
import { MasterSeComponent } from './cvmodule/cvitems/popup/master-se/master-se.component';
import { MasterAiComponent } from './cvmodule/cvitems/popup/master-ai/master-ai.component';

const appRouter: Routes =
    [   {path: '', redirectTo: '/home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'cvitems', component: CvItemsComponent,
         children: [  
            { path: 'motivation', component: MotivationComponent},
            { path: 'courses', component: CoursesComponent },
            { path: 'education', component: EducationComponent ,
              children: [
                {path: 'masterSe', component: MasterSeComponent},
                {path: 'masterAi', component: MasterAiComponent}
              ]},
            { path: 'hobbies', component: HobbiesComponent },
            { path: 'knowledge', component: KnowledgeComponent },
            { path: 'language', component: LanguageComponent },
            { path: 'work', component: WorkComponent,
              children: [
                { path: 'school', component: SchoolComponent,
                children: [
                  { path: 'sondervick', component: SondervickComponent},
                  { path: 'luzac', component: LuzacComponent}
                ]},
                { path: 'ict', component: IctComponent,
                children: [
                  { path: 'smartfloor', component: SmartfloorComponent},
                  { path: 'beeyond', component: BeeyondComponent},
                  { path: 'qfactors', component: QfactorsComponent},
                  { path: 'sligrostage', component: SligrostageComponent},
                  { path: 'sligro', component: SligroComponent}
                ]},            
                { path: 'pharmacy', component: PharmacyComponent,
                children: [
                  { path: 'organon', component: OrganonComponent},
                  { path: 'publications', component: PublicationsComponent}
                ]}
              ] }
         ]}
    ];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRouter),
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{}
