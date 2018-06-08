// component du module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

// component perso

import { Errors404Component } from './errors/errors404/errors404.component';
import { HomeComponent } from './home/home/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'error-404', component: Errors404Component},
  {path: '**', component: Errors404Component}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
