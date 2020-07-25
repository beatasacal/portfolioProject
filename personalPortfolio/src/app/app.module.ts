import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { DetailsComponent } from './components/details/details.component';
import { LogoInfoComponent } from './components/logo-info/logo-info.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResumePageComponent,
    DetailsComponent,
    LogoInfoComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
