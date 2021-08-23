import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsStockSuggestionChangeComponent} from "./details-stock-suggestion-change.component";
import {IonicModule} from "@ionic/angular";
import {DefaultImgDirectiveModule, GenericChartModule, PriceCompareItemModule} from "@shared";



@NgModule({
  declarations: [DetailsStockSuggestionChangeComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceCompareItemModule,
    GenericChartModule,
    DefaultImgDirectiveModule
  ],
  exports: [DetailsStockSuggestionChangeComponent]
})
export class DetailsStockSuggestionChangeModule { }
