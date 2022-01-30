import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<any>("default message");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(responseData : string){
    this.messageSource.next(responseData)
  }
}
