import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketCalendarEconomicComponent} from "./market-calendar-economic.component";
import {IonicModule} from "@ionic/angular";
import {PriceChangeItemModule} from "@shared";



@NgModule({
  declarations: [MarketCalendarEconomicComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceChangeItemModule
  ],
  exports: [MarketCalendarEconomicComponent]
})
export class MarketCalendarEconomicModule { }
