import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './Components/menubar/menubar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServiceComponent } from './Components/home/service/service.component';
import { DetailsComponent } from './Components/home/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    DetailsComponent,
    
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
