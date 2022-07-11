import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from "@angular/router";
import { WelcomeDashboardComponent } from './view/welcome-dashboard/welcome-dashboard.component';
import { PaidTutorialsComponent } from './view/paid-tutorials/paid-tutorials.component';
import { ChristmasPageComponent } from './view/christmas-page/christmas-page.component';

const routes: Routes = [
 {path:'', component:WelcomeDashboardComponent},
 {path:'paid-tutorials', component:PaidTutorialsComponent},
 {path: 'happy-christmas', component: ChristmasPageComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class RoutingModule { }
