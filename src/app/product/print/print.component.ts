import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  responseData : any
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(responseData => this.responseData = responseData)
  }

}
