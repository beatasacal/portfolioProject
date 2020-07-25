import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home-page', component: HomePageComponent },
    { path: 'resume', component: ResumeComponent },
    { path: '', redirectTo: 'home-page', pathMatch: 'full' }
  ], { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
