import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component'
import { MyProjectsComponent } from './pages/my-projects/my-projects.component'
import { ProjectComponent } from './pages/project/project.component'
import { ContactMeComponent } from './pages/contact-me/contact-me.component'
import { ErrorPageComponent } from './pages/error-page/error-page.component'

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "my-projects", component: MyProjectsComponent },
  { path: "project/:id", component: ProjectComponent },
  { path: "contact-me", component: ContactMeComponent },
  { path: "**", component: ErrorPageComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
