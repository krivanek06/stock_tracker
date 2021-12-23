import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { StockDetailsFinancialGrowthComponent } from './stock-details-financial-growth.component';

const routes: Routes = [
  {
    path: '',
    component: StockDetailsFinancialGrowthComponent,
  },
];

@NgModule({
  declarations: [
    StockDetailsFinancialGrowthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class StockDetailsFinancialGrowthModule { }
