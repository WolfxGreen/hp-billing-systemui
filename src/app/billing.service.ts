import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  REST_API_URL = 'http://localhost:7071/api/billing';
  res : any;

  constructor(private http: HttpClient) { }

  generateBilling(billingdata : any){
    this.http.post<any>(this.REST_API_URL, billingdata).subscribe(data => {
        this.res = data;
    })

  }
}
