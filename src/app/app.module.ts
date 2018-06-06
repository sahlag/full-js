// Modules d'angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Modules perso
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductViewShowComponent } from './products/product-view-show/product-view-show.component';
import { Errors404Component } from './errors/errors404/errors404.component';
import { HomeComponent } from './home/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductViewShowComponent,
    Errors404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
