// component d'angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// component perso
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

// Définir les routes du produit
const routesProduct = [
  {path: 'produits', component: ProductListComponent},
  {path: 'produits/ajout', component: ProductAddComponent},
  {path: 'produits/detail/:id', component: ProductViewShowComponent},
  {path: 'produits/modification/:id', component: ProductUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routesProduct)],
  exports: [RouterModule],
  declarations: []
})
export class ProductRoutingModule { }
