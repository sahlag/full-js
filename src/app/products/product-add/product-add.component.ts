import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

// Produit que l'on va envoyer au serveur

private product: Product;

// les variable d'affichage

private title: String;
private submitValue: String;

  constructor(private productService: ProductService) {
    this.product = new Product();

    // initialisation des valeur

    this.title = `Ajout d'un produit`;
    this.submitValue = `Créer`;
   }

   /**
    * Appel du service pour créer le produit en BDD (via l'API)
    */

    private saveProduct(): void {
      console.log('Formulaire soumis');
      // Ajout de la date de création
      this.product.createdAt = new Date();
      this.productService.addProduct(this.product).subscribe(
        (productAPI) => {
          console.log('Réception du nouveau produit');
          console.log(productAPI);
        }
      );
    }

  ngOnInit() {
  }

}
