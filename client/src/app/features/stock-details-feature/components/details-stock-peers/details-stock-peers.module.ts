import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsStockPeersComponent} from "./details-stock-peers.component";
import {IonicModule} from "@ionic/angular";
import {
  DefaultImgDirectiveModule,
  NumberFormatterPipeModule,
  PriceChangeItemModule,
  TableHighLowRangeModule
} from "@shared";



@NgModule({
  declarations: [DetailsStockPeersComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceChangeItemModule,
    DefaultImgDirectiveModule,
    NumberFormatterPipeModule,
    TableHighLowRangeModule
  ],
  exports: [DetailsStockPeersComponent]
})
export class DetailsStockPeersModule { }
