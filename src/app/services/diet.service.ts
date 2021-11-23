import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  //private baseURL= 'https://appnutricare.herokuapp.com/api/diets';
  private baseURL= 'http://localhost:8080/api/diets';

  constructor(private http: HttpClient) { }

  createDiet(diet: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, diet);
  }

  updateDiet(id: number, diet: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, diet);
  }

  deleteDiet(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getDietList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getDietById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  addRecipeToDiet(recipe_id: number, diet_id: number): Observable<any>{
    return this.http.post(`${this.baseURL}/${recipe_id}/${diet_id}`, null);
  }

  findDietRecipes(dietId: number): Observable<any>{
    return this.http.get(`${this.baseURL}/findDietRecipes/${dietId}`);
  }

  deleteRecipeFromDiet(recipe_id: number, diet_id: number) : Observable<any>{
    return this.http.delete(`${this.baseURL}/${recipe_id}/${diet_id}`);
  }
}
