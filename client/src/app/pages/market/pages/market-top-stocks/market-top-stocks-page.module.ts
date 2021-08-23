import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MarketCompanyQuotesTableModule} from "@market-feature";
import {MarketTopStocksComponent} from "./market-top-stocks.component";
import {GenericCardModule, GenericListModule} from "@shared";



const routes: Routes = [
  {
    path: '',
    component: MarketTopStocksComponent,
  },
];


@NgModule({
  declarations: [MarketTopStocksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MarketCompanyQuotesTableModule,
    GenericCardModule,
    GenericListModule,
  ]
})
export class MarketTopStocksPageModule { }
