import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsStockTrendComponent} from "./details-stock-trend.component";
import {TrendItemComponent} from "./trend-item/trend-item.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [DetailsStockTrendComponent, TrendItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DetailsStockTrendComponent]
})
export class DetailsStockTrendModule { }
