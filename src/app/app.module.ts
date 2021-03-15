import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { RouterModule, Routes } from '@angular/router';
import { BackendService } from './backend.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'my-education',
    component: MyEducationComponent
  },
  {
    path: 'my-experience',
    component: MyExperienceComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  },
  {
    path: 'my-skill',
    component: MySkillComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyProfileComponent,
    MyEducationComponent,
    MyExperienceComponent,
    MySkillComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
