import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketStockNewsComponent} from "./market-stock-news.component";
import {IonicModule} from "@ionic/angular";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DefaultImgDirectiveModule} from "../../../../shared/directives/default-img-directive/default-img-directive.module";
import {RelativeTimePipeModule} from "@shared";



@NgModule({
  declarations: [MarketStockNewsComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatTooltipModule,
    DefaultImgDirectiveModule,
    RelativeTimePipeModule
  ],
  exports: [MarketStockNewsComponent]
})
export class MarketStockNewsModule { }
