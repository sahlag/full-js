import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        console.log('Produits réceptionnés');
        console.log(products);
        this.products = products;
      }
    );
  }

}
