import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockDetailsStatisticsPage } from './stock-details-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: StockDetailsStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockDetailsStatisticsPageRoutingModule {}
