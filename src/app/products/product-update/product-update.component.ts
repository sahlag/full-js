import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: '../product-add/product-add.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
// Produit actuel (récupération grace a l'id)
private product: Product;
// variable d'affichage
private title: String;
private submitValue: String;


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.product = new Product();
  // Initialisation des variables d'affichage
    this.title = `Modification d'un produit`;
    this.submitValue = `Modifier`;

  }

  ngOnInit() {
    // Récupération de l'id depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');
    // Utilisation du service pour récupérer la produit de l'API et l'attribuer à notre produit de component
    this.productService.showProduct(id).subscribe(
     (productAPI) => {
       console.log('reception de produit');
       if (productAPI) {
      this.product = productAPI;
      } else {
         this.router.navigate(['/error-404']);
     }
    }
    );
  }
/**
 * Appel du serve pour la modification en BDD
 */
  private saveProduct(): void {
    console.log('Formulaire de modification soumis');

    this.productService.update(this.product).subscribe(
    (data) => {
      console.log('Modification effectuée ?' + data.result);
      if (data.result) {
        this.router.navigate(['/produits/detail/' + this.product._id]);
      }
    }
    );
  }
}
