import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.css']
})
export class ProductViewShowComponent implements OnInit, DoCheck {
  private product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
this.findProduct();
}
/**
 *  On charge le produit courant lorsque l'URL change
 */
ngDoCheck(): void {
if (this.product) {
  const id = this.route.snapshot.paramMap.get('id');
  if (id !== this.product._id) {
    this.findProduct();
  }
}
}

private findProduct(): void {
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

}
