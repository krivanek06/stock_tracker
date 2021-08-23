import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketCalendarDividendPayoutComponent} from "./market-calendar-dividend-payout.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [MarketCalendarDividendPayoutComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MarketCalendarDividendPayoutComponent]
})
export class MarketCalendarDividendPayoutModule { }
