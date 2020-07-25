import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumeComponent } from './components/resume/resume.component';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule } from '@angular/router';
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
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home-page', component: HomePageComponent },
      { path: 'resume', component: ResumeComponent },
      { path: '', redirectTo: 'home-page', pathMatch: 'full' }
    ], { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
