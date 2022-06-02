import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ListSkeletonModule, PriceChangeItemModule } from '@shared';
import { MarketCalendarEconomicComponent } from './market-calendar-economic.component';

@NgModule({
	declarations: [MarketCalendarEconomicComponent],
	imports: [CommonModule, MatTableModule, PriceChangeItemModule, ListSkeletonModule],
	exports: [MarketCalendarEconomicComponent],
})
export class MarketCalendarEconomicModule {}
