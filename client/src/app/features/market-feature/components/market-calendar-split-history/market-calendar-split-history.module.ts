import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketCalendarSplitHistoryComponent} from "./market-calendar-split-history.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [MarketCalendarSplitHistoryComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MarketCalendarSplitHistoryComponent]
})
export class MarketCalendarSplitHistoryModule { }
