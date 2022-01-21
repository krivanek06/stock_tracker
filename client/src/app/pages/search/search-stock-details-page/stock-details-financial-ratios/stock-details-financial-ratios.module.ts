import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArrayLastValuePipeModule, ConvertToSeriesModule, GenericCardModule, GenericChartModule, SharedModule } from '@shared';
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
    GenericCardModule,
    GenericChartModule,
    ConvertToSeriesModule,
    IonicModule,
    ArrayLastValuePipeModule,
    RouterModule.forChild(routes)
  ]
})
export class StockDetailsFinancialRatiosModule { }
