import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionistService {

  //private baseURL= 'https://appnutricare.herokuapp.com/api/nutritionist';
  private baseURL= 'http://localhost:8080/api/nutritionist';

  constructor(private http: HttpClient) { }

  createNutritionist(nutritionist: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, nutritionist);
  }

  updateNutritionist(id: number, nutritionist: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, nutritionist);
  }

  deleteNutritionist(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getNutritionistList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getNutritionistById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getNutritionistByUsername(username: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUsername/${username}`);
  }

  getNutritionistByCnpNumber(cnpNumber: number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByCnpNumber/${cnpNumber}`);
  }

  getNutritionistByFirstName(firstName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstname/${firstName}`);
  }

  getNutritionistByLastName(lastName: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByLastname/${lastName}`);
  }

  getNutritionistByFirstNameAndLastName(firstName: string, lastName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstnameAndLastname/${firstName}/${lastName}`);
  }
}
