import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://localhost:3000/api/user';

  private httpOptions = {
  headers: new HttpHeaders( { 'Content-type' : 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
  * Ajout d'utilisteur en bdd via l'API REST de Node.
  * @param product le produit à mettre en base de données
  */

  public register (user: User): Observable<{result: Boolean}> {
    return this.http.post<{result: Boolean}>(this.apiURL, user, this.httpOptions).pipe(
    tap((data) => console.log(`retour de l'API après l'ajout du l'utilisateur: ` + data.result))
    );
  }
}

