import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockDetailsFinancialsPage } from './stock-details-financials.page';

const routes: Routes = [
  {
    path: '',
    component: StockDetailsFinancialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockDetailsFinancialsPageRoutingModule {}
