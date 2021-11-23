import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //private baseURL= 'https://appnutricare.herokuapp.com/api/clients';
  private baseURL= 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  createClient(client: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, client);
  }

  updateClient(id: number, client: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, client);
  }

  deleteClient(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getClientList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getClientById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getClientByUsername(username: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUsername/${username}`);
  }

  getClientByFirstName(firstName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstName/${firstName}`);
  }

  getClientByLastName(lastName: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByLastName/${lastName}`);
  }

  getClientByFirstNameAndLastName(firstName: string, lastName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstNameAndLastName/${firstName}/${lastName}`);
  }

  addFavoriteRecipe(recipe_id: number, client_id: number, client: Object, date: string): Observable<any>{
    let params = new HttpParams();
    params = params.append('date', date);
    return this.http.post(`${this.baseURL}/${recipe_id}/${client_id}`, client, {params: params});
  }

  getClientFavoriteRecipes(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/findClientFavoriteRecipes/${id}`);
  }

  deleteClientFavoriteRecipe(recipe_id: number, client_id: number) : Observable<any>{
    return this.http.delete(`${this.baseURL}/${recipe_id}/${client_id}`);
  }
}
