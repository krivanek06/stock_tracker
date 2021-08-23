import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketCompanyQuotesTableComponent} from "./market-company-quotes-table.component";
import {IonicModule} from "@ionic/angular";
import {
  NumberFormatterPipeModule,
  PriceChangeItemModule,
  PriceCompareItemModule,
  TableHighLowRangeModule,
  ListSkeletonModule
} from "@shared";
import {DefaultImgDirectiveModule} from "../../../../shared/directives/default-img-directive/default-img-directive.module";



@NgModule({
  declarations: [
    MarketCompanyQuotesTableComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TableHighLowRangeModule,
    PriceChangeItemModule,
    PriceCompareItemModule,
    NumberFormatterPipeModule,
    ListSkeletonModule,
    DefaultImgDirectiveModule
  ],
  exports: [
    MarketCompanyQuotesTableComponent
  ]
})
export class MarketCompanyQuotesTableModule { }
