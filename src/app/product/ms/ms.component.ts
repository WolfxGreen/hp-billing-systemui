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
  res: any;

  constructor(public datepipe: DatePipe, private billingService : BillingService) { 
  }

  ngOnInit() {
    this.msForm = new FormGroup({
      // date: new FormControl(this.datepipe.transform((new Date), 'dd/MM/yyyy')),
      // TxnTime: new FormControl(this.datepipe.transform((new Date), 'H:MM:SS')),
      date: new FormControl(),
      TxnTime: new FormControl(),
      type: new FormControl('cash'),
      PumpNo: new FormControl('1'),
      NozzleNo: new FormControl('1'),
      product: new FormControl('MS'),
      price: new FormControl(),
      vehicleNo: new FormControl(),
      quantity: new FormControl()
    });
  }

 async onGenerateMSBill() {
    console.log(this.msForm.value);
    await this.billingService.generateBilling(this.msForm.value)
    .subscribe(data=>{
      this.res=data;
      console.log(JSON.stringify(this.res));
    });
    
  }
}
