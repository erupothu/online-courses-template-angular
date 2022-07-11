import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {StickyModule} from 'ng2-sticky-kit';

import { AngularMaterialModule } from './core/angular-material.module';
import { RoutingModule } from './routing.module';
// import { SnowfModule } from 'ngx-snowf';
import { ParticlesModule } from 'angular-particle';


import { AppComponent } from './app.component';
import { WelcomeDashboardComponent } from './view/welcome-dashboard/welcome-dashboard.component';
import { PaidTutorialsComponent } from './view/paid-tutorials/paid-tutorials.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { ChristmasPageComponent } from './view/christmas-page/christmas-page.component';

@NgModule({
  declarations: [
    AppComponent, WelcomeDashboardComponent, PaidTutorialsComponent, ChristmasPageComponent
  ],
  imports: [
    BrowserModule,RoutingModule,  AngularMaterialModule, FlexLayoutModule,BrowserAnimationsModule, StickyModule, ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
