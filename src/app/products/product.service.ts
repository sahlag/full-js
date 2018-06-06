import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// classe de modèle
import { Product } from '../model/product';

// Rxjs: les observable
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }

  /**
   *Récupération des produits via l'API REST de Node
   */
 public getProducts() {
 return this.http.get(this.apiURL).pipe(
 tap(() => console.log('Réception des produits'))
 );
 }
}
