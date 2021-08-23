import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HoldingsTableComponent} from "./holdings-table.component";
import {IonicModule} from "@ionic/angular";
import {DefaultImgDirectiveModule} from "../../../../../shared/directives/default-img-directive/default-img-directive.module";
import {PriceCompareItemModule, RecommendationDirectiveModule} from "@shared";



@NgModule({
  declarations: [HoldingsTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    DefaultImgDirectiveModule,
    PriceCompareItemModule,
    RecommendationDirectiveModule
  ],
  exports: [HoldingsTableComponent]
})
export class HoldingsTableModule { }
