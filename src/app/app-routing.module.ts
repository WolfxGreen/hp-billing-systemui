import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HsdComponent } from './product/hsd/hsd.component';
import { MsComponent } from './product/ms/ms.component';
import { PrintComponent } from './product/print/print.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{path:'billing', children: [
  { path: '', component: ProductComponent },
  { path: 'ms', component: MsComponent },
  { path: 'hsd', component: HsdComponent },
  { path: 'print', component:PrintComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
