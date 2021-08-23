import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockSummaryContainerComponent} from "./stock-summary-container.component";
import {
  NumberFormatterPipeModule,
} from "../../pipes";
import {
  PriceChangeItemModule,
  PriceCompareItemModule
} from "../../components";
import {
  RecommendationDirectiveModule
} from "../../directives";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [StockSummaryContainerComponent],
  imports: [
    CommonModule,
    NumberFormatterPipeModule,
    IonicModule,
    PriceCompareItemModule,
    PriceChangeItemModule,
    RecommendationDirectiveModule
  ],
  exports: [StockSummaryContainerComponent]
})
export class StockSummaryContainerModule { }
