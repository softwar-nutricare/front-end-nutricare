import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  //private baseURL= 'https://appnutricare.herokuapp.com/api/specialty';
  private baseURL= 'http://localhost:8080/api/specialty';
  
  constructor(private http: HttpClient) { }

  createSpecialty(specialty: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, specialty);
  }

  updateSpecialty(id: number, specialty: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, specialty);
  }

  deleteSpecialty(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getSpecialtyList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }
  getSpecialtyById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  searchByNameAndInstitutionName(name: string, nameInstitution: string): Observable<any>{
    return this.http.get(`${this.baseURL}/findByNameAndInstitutionName/${name}/${nameInstitution}`);
  }

}
