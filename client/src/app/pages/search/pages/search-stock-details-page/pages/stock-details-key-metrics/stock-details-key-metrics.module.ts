import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertToSeriesModule, GenericCardModule, GenericChartModule, SharedModule } from '@shared';
import { StockDetailsKeyMetricsComponent } from './stock-details-key-metrics.component';

const routes: Routes = [
  {
    path: '',
    component: StockDetailsKeyMetricsComponent,
  },
];

@NgModule({
  declarations: [
    StockDetailsKeyMetricsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    GenericCardModule,
    GenericChartModule,
    ConvertToSeriesModule,
  ]
})
export class StockDetailsKeyMetricsModule { }
