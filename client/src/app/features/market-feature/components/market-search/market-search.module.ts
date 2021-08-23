import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketSearchFormComponent} from "./market-search-form/market-search-form.component";
import {MarketSearchFormResultComponent} from "./market-search-form-result/market-search-form-result.component";
import {MarketSearchTableComponent} from "./market-search-table/market-search-table.component";
import {IonicModule} from "@ionic/angular";
import {
  FormMatInputLockWrapperModule,
  ListSkeletonModule,
  NumberFormatterPipeModule,
  PriceCompareItemModule,
  TableHighLowRangeModule
} from "@shared";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [MarketSearchFormComponent, MarketSearchFormResultComponent, MarketSearchTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceCompareItemModule,
    NumberFormatterPipeModule,
    TableHighLowRangeModule,
    ListSkeletonModule,
    MatIconModule,
    FormMatInputLockWrapperModule,
    ReactiveFormsModule
  ],
  exports: [MarketSearchFormComponent, MarketSearchFormResultComponent, MarketSearchTableComponent]
})
export class MarketSearchModule { }
