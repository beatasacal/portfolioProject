import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home-page', component: HomePageComponent },
    { path: 'resume-page', component: ResumePageComponent },
    { path: '', redirectTo: 'home-page', pathMatch: 'full' }
  ], { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
