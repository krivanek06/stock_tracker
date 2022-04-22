import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ListSkeletonModule } from '@shared';
import { MarketCalendarDividendPayoutComponent } from './market-calendar-dividend-payout.component';

@NgModule({
	declarations: [MarketCalendarDividendPayoutComponent],
	imports: [CommonModule, MatTableModule, ListSkeletonModule],
	exports: [MarketCalendarDividendPayoutComponent],
})
export class MarketCalendarDividendPayoutModule {}
