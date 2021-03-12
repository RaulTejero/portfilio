import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    InicioComponent,
    AboutComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
