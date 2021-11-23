import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  //private baseURL= 'https://appnutricare.herokuapp.com/api/PaymentMethods';
  private baseURL= 'http://localhost:8080/api/PaymentMethods';

  constructor(private http: HttpClient) { }

  createPaymentMethod(paymentMethod: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, paymentMethod);
  }

  updatePaymentMethod(id: number, paymentMethod: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, paymentMethod);
  }

  deletePaymentMethod(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getPaymentMethodList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getPaymentMethodById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getPaymentMethodByClient(client_id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchPaymentMethodByClientId/${client_id}`);
  }
}
