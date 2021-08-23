import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketTopTableCryptoComponent} from "./market-top-table-crypto.component";
import {IonicModule} from "@ionic/angular";
import {
  ListSkeletonModule,
  NumberFormatterPipeModule,
  PriceCompareItemModule,
  SplitPipeModule,
  TableHighLowRangeModule
} from "@shared";
import {DefaultImgDirectiveModule} from "../../../../shared/directives/default-img-directive/default-img-directive.module";



@NgModule({
  declarations: [MarketTopTableCryptoComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceCompareItemModule,
    NumberFormatterPipeModule,
    SplitPipeModule,
    TableHighLowRangeModule,
    DefaultImgDirectiveModule,
    ListSkeletonModule
  ],
  exports: [MarketTopTableCryptoComponent]
})
export class MarketTopTableCryptoModule { }
