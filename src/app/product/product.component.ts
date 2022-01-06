import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsComponent } from './ms/ms.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChoosingProduct(event : any){
    if(event == 'MS'){
      this.router.navigate(['/billing/ms']);
    }else if (event == 'HSD'){
      this.router.navigate(['/billing/hsd'])
    }
  }

}
