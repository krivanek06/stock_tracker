import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import {
	MarketCalendarDividendPayoutModule,
	MarketCalendarEarningsModule,
	MarketCalendarEconomicModule,
	MarketCalendarIpoModule,
	MarketCalendarSplitHistoryModule,
} from '@market-feature';
import { GenericExtensionPanelModule } from '@shared';
import { MarketCalendarComponent } from './market-calendar.component';

const routes: Routes = [
	{
		path: '',
		component: MarketCalendarComponent,
	},
];

@NgModule({
	declarations: [MarketCalendarComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MarketCalendarIpoModule,
		MarketCalendarEarningsModule,
		MarketCalendarEconomicModule,
		GenericExtensionPanelModule,
		MarketCalendarSplitHistoryModule,
		MarketCalendarDividendPayoutModule,
		MatExpansionModule,
	],
})
export class MarketCalendarModule {}
