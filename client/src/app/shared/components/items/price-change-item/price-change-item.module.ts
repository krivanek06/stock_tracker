import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PriceChangeItemComponent} from "./price-change-item.component";
import {NumberFormatterPipeModule} from "../../../pipes";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    PriceChangeItemComponent
  ],
  exports: [
    PriceChangeItemComponent
  ],
  imports: [
    CommonModule,
    NumberFormatterPipeModule,
    IonicModule
  ]
})
export class PriceChangeItemModule { }
