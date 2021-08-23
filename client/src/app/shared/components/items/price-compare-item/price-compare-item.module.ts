import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PriceCompareItemComponent} from "./price-compare-item.component";
import {NumberFormatterPipeModule} from "../../../pipes";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    PriceCompareItemComponent
  ],
  imports: [
    CommonModule,
    NumberFormatterPipeModule,
    IonicModule
  ],
  exports: [
    PriceCompareItemComponent
  ]
})
export class PriceCompareItemModule { }
