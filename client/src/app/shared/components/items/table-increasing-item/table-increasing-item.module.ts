import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableIncreasingItemComponent} from "./table-increasing-item.component";
import {NumberFormatterPipeModule} from "../../../pipes";
import {IonicModule} from "@ionic/angular";
import {PriceCompareItemModule} from "../price-compare-item/price-compare-item.module";



@NgModule({
  declarations: [TableIncreasingItemComponent],
  imports: [
    CommonModule,
    NumberFormatterPipeModule,
    PriceCompareItemModule,
    IonicModule
  ],
  exports: [TableIncreasingItemComponent]
})
export class TableIncreasingItemModule { }
