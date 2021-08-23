import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketCalendarIpoComponent} from "./market-calendar-ipo.component";
import {IonicModule} from "@ionic/angular";
import {NumberFormatterPipeModule} from "@shared";



@NgModule({
  declarations: [MarketCalendarIpoComponent],
  imports: [
    CommonModule,
    IonicModule,
    NumberFormatterPipeModule
  ],
  exports: [MarketCalendarIpoComponent]
})
export class MarketCalendarIpoModule { }
