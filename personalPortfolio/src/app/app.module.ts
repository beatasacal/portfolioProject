import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumeComponent } from './components/resume/resume.component';
import { DetailsComponent } from './components/details/details.component';
import { LogoInfoComponent } from './components/logo-info/logo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResumeComponent,
    DetailsComponent,
    LogoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
