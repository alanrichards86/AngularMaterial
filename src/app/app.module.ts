import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Materials
import { MaterialModule } from './material/material.module';
import { SignupFormComponent } from './components/home-page/signup-form/signup-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ActivateCardFormComponent } from './components/home-page/activate-card-form/activate-card-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    HomePageComponent,
    HeaderComponent,
    ActivateCardFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
