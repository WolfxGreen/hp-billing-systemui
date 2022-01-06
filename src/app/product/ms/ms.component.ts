import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BillingService } from 'src/app/billing.service';

@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.css']
})
export class MsComponent implements OnInit {

  msForm!: FormGroup;

  constructor(public datepipe: DatePipe, private billingService : BillingService) { 
  }

  ngOnInit() {
    this.msForm = new FormGroup({
      TxnDate: new FormControl(this.datepipe.transform((new Date), 'dd/MM/yyyy')),
      TxnTime: new FormControl(this.datepipe.transform((new Date), 'H:MM:SS')),
      TxnID: new FormControl(),
      TxnType: new FormControl('cash'),
      PumpNo: new FormControl('1'),
      NozzleNo: new FormControl('1'),
      Product: new FormControl('MS'),
      Price: new FormControl(),
      VehicleNo: new FormControl(),
      Quantity: new FormControl(),
      Amount: new FormControl()
    });
  }

  onGenerateMSBill() {
    console.log(this.msForm.value);
    const res:any =  this.billingService.generateBilling(this.msForm.value);
    console.log(res);
  }
}
