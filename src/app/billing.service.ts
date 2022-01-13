import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
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
    return this.http.post<any>(this.REST_API_URL, billingdata)
    }
  }
