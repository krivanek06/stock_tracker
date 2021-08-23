import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WatchlistTableComponent} from "./watchlist-table.component";
import {IonicModule} from "@ionic/angular";
import {
  NumberFormatterPipeModule,
  PriceCompareItemModule,
  RecommendationDirectiveModule,
  TableHighLowRangeModule,
  DefaultImgDirectiveModule
} from "@shared";



@NgModule({
  declarations: [WatchlistTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    DefaultImgDirectiveModule,
    PriceCompareItemModule,
    NumberFormatterPipeModule,
    TableHighLowRangeModule,
    RecommendationDirectiveModule
  ],
  exports: [WatchlistTableComponent]
})
export class WatchlistTableModule { }
