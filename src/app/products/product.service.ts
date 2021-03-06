import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  private httpOptions = {
  headers: new HttpHeaders( { 'Content-type' : 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
   *Récupération des produits via l'API REST de Node
   */
 public getProducts(): Observable<Product[]> {
 return this.http.get<Product[]>(this.apiURL).pipe(
 tap(() => console.log('Réception des produits'))
 );
 }

 /**
  * Ajout d'un produit en bdd via l'API REST de Node.
  * @param product le produit à mettre en base de données
  */
 public addProduct (product: Product): Observable<Product> {
   return this.http.post<Product>(this.apiURL, product, this.httpOptions).pipe(
   tap(() => console.log(`retour de l'API après l'ajout du produit` ))
   );
 }

 /**
  * Récupération d'un produit (grace a l id) via l'API REST de Node
  * @param id L'id du produit recu dans URL
  */

 public showProduct(id: String): Observable<Product> {
  return this.http.get<Product>(this.apiURL + '/' + id).pipe(
    tap((product) => console.log(`Réception de produit portant l'id ${id}`))
    );
 }
/**
 * Modification d(un produit via l'API REST de node)
 * @param product Produit à modifier en BDD
 */
 public update(product: Product): Observable<{result: Boolean}> {
   return this.http.put<{result: Boolean}>(this.apiURL, product, this.httpOptions).pipe(
     tap((data) => console.log('Retour de modification:  ' + data.result))
   );
 }

 /**
  * Suppresstion d'ub produit via l'API REST de node
  */
 public delete(id: String): Observable<{result: Boolean}> {
  return this.http.delete<{result: Boolean}>(this.apiURL + '/' + id).pipe(
    tap((data) => console.log(`Retour de suppression:` + data.result))
    );
 }
}
