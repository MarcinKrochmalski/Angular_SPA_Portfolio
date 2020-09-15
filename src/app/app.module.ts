import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BackgroundComponent } from './layout/background/background.component';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';
import { AnimationComponent } from './components/animation/animation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ProjectComponent,
    ContactMeComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    BackgroundAnimationComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
