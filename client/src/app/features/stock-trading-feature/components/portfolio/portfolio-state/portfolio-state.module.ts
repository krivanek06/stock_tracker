import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioStateComponent} from "./portfolio-state.component";
import {
  GenericFancyCardModule,
  NumberFormatterPipeModule,
  PriceChangeItemModule,
  PriceCompareItemModule
} from "@shared";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [PortfolioStateComponent],
  imports: [
    CommonModule,
    GenericFancyCardModule,
    IonicModule,
    PriceChangeItemModule,
    PriceCompareItemModule,
    NumberFormatterPipeModule
  ],
  exports: [PortfolioStateComponent]
})
export class PortfolioStateModule { }
