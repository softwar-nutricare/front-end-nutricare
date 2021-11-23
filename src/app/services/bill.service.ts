import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  //private baseURL= 'https://appnutricare.herokuapp.com/api/Bills';
  private baseURL= 'http://localhost:8080/api/Bills';

  constructor(private http: HttpClient) { }

  createBill(bill: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, bill);
  }

  updateBill(id: number, bill: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, bill);
  }

  deleteBill(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getBillList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getBillById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getBillByClient(client_id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchBillByClientId/${client_id}`);
  }

  //REVISAAAAAAAAR
  getBillBetweenDates(date1: string, date2: string) : Observable<any> {
    let params = new HttpParams();

    params = params.append('date1', date1);
    params = params.append('date2', date2);
    return this.http.get(`${this.baseURL}/searchBetweenDates`, {params: params} );
  }
}
