import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketCalendarEarningsComponent} from "./market-calendar-earnings.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [MarketCalendarEarningsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MarketCalendarEarningsComponent]
})
export class MarketCalendarEarningsModule { }
