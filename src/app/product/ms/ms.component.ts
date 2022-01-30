import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/billing.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.css']
})
export class MsComponent implements OnInit {

  msForm!: FormGroup;
  res: any;
  myDate: any = new Date();
  myTime: any = new Date();

  constructor(public datepipe: DatePipe, private billingService: BillingService, private dataService : DataService, private router: Router) {
  }

  ngOnInit() {
    this.msForm = new FormGroup({
      // date: new FormControl(this.datepipe.transform((new Date), 'dd/MM/yyyy')),
      // TxnTime: new FormControl(this.datepipe.transform((new Date), 'H:MM:SS')),
      date: new FormControl(),
      time: new FormControl(),
      type: new FormControl('cash'),
      PumpNo: new FormControl('1'),
      NozzleNo: new FormControl('1'),
      product: new FormControl('MS'),
      price: new FormControl(),
      vehicleNo: new FormControl(),
      quantity: new FormControl(),
      amount: new FormControl()
    });
  }

  async onGenerateMSBill() {
    if (this.msForm.value.date == null) {
      this.msForm.value.date = this.defaultDate();
    }
    if (this.msForm.value.time == null) {
      this.msForm.value.time = this.defaultTime();
    }
    console.log(this.msForm.value);
    this.billingService.generateBilling(this.msForm.value)
      .subscribe(data => {
        this.res = data;
        console.log(JSON.stringify(this.res));
        this.dataService.changeMessage(JSON.stringify(this.res));
      });
      this.router.navigate(['/billing/print']);
  }

  defaultDate(): any {
    this.myDate = this.datepipe.transform(this.myDate, 'dd/MM/yyyy');
    return this.myDate;
  }

  defaultTime(): any {
    this.myTime = this.datepipe.transform(this.myTime, 'HH:mm:ss');
    return this.myTime;
  }

}
