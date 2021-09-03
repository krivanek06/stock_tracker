import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NumberFormatterPipeModule } from '@shared';
import { MarketCalendarEarningsComponent } from './market-calendar-earnings.component';

@NgModule({
	declarations: [MarketCalendarEarningsComponent],
	imports: [CommonModule, IonicModule, NumberFormatterPipeModule],
	exports: [MarketCalendarEarningsComponent],
})
export class MarketCalendarEarningsModule {}
