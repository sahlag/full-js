// Modules d'angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules perso
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { Errors404Component } from './errors/errors404/errors404.component';
import { HomeComponent } from './home/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    Errors404Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule// cemodule de routage doit etre charger en dernier, apres les autres modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
