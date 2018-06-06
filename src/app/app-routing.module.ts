// component du module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
// component perso
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductViewShowComponent } from './products/product-view-show/product-view-show.component';
import { Errors404Component } from './errors/errors404/errors404.component';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produits', component: ProductListComponent},
  {path: 'produits/ajout', component: ProductAddComponent},
  {path: 'produits/detail/:id', component: ProductViewShowComponent},
  {path: 'error-404', component: Errors404Component},
  {path: '**', component: Errors404Component}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
