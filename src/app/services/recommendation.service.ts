import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  //private baseURL= 'https://appnutricare.herokuapp.com/api/recommendation';
  private baseURL= 'http://localhost:8080/api/recommendation';

  constructor(private http: HttpClient) { }

  createRecommendation(recommendation: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, recommendation);
  }

  updateRecommendation(id: number, recommendation: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, recommendation);
  }

  deleteRecommendation(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getRecommendationList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getRecommendationById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getRecommendationByName(name: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByName/${name}`);
  }

  getRecommendationByNutritionist(nutritionist_id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByNutritionistId/${nutritionist_id}`);
  }
}
