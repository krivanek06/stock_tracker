import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { StockDetailsFinancialRatiosComponent } from './stock-details-financial-ratios.component';


const routes: Routes = [
  {
    path: '',
    component: StockDetailsFinancialRatiosComponent,
  },
];

@NgModule({
  declarations: [
    StockDetailsFinancialRatiosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class StockDetailsFinancialRatiosModule { }
