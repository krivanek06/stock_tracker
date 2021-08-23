import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockInfoIdentificationItemComponent} from "./stock-info-identification-item.component";
import {PriceChangeItemModule} from "../price-change-item/price-change-item.module";
import {NumberFormatterPipeModule} from '../../../pipes';
import {IonicModule} from "@ionic/angular";
import {DefaultImgDirectiveModule} from "../../../directives";



@NgModule({
  declarations: [
    StockInfoIdentificationItemComponent
  ],
  imports: [
    CommonModule,
    PriceChangeItemModule,
    NumberFormatterPipeModule,
    IonicModule,
    DefaultImgDirectiveModule
  ],
  exports: [StockInfoIdentificationItemComponent]
})
export class StockInfoIdentificationItemModule { }
