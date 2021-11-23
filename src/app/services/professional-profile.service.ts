import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalProfileService {
  
  //private baseURL= 'https://appnutricare.herokuapp.com/api/ProfessionalProfiles';
  private baseURL= 'http://localhost:8080/api/ProfessionalProfiles';

  constructor(private http: HttpClient) { }

  createProfessionalprofile(professionalprofile: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, professionalprofile);
  }

  updateProfessionalprofile(id: number, professionalprofile: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, professionalprofile);
  }

  deleteProfessionalprofile(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  addSpecialtyToProfessionalProfile(specialtyId: number, professionalProfileId: number): Observable<Object>{
    return this.http.post(`${this.baseURL}/${specialtyId}/${professionalProfileId}`, null);
  }

  deleteSpecialtyFromProfessionalProfile(specialtyId: number, professionalProfileId: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${specialtyId}/${professionalProfileId}`);
  }

  findSpecialtiesByProfessionalProfileId(professionalProfileId: number): Observable<any>{
    return this.http.get(`${this.baseURL}/findSpecialtiesByProfessionalProfileId/${professionalProfileId}`);
  }

  getProfessionalprofileByNutritionist(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByNutritionist/${id}`);
  }
}
