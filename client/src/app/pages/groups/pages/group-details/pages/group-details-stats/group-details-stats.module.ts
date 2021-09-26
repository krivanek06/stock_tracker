import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule, GenericChartModule, GenericListModule, PieChartWrapperModule } from '@shared';
import {
	HoldingsAllocationGroupChartModule,
	HoldingsTableModule,
	HoldingsToPortfolioChartSeriesPipeModule,
	HoldingsToSectorChartSeriesPipeModule,
	PortfolioGrowthChartModule,
} from '@stock-trading-feature';
import { GroupDetailsStatsComponent } from './group-details-stats.component';

@NgModule({
	declarations: [GroupDetailsStatsComponent],
	imports: [
		CommonModule,
		IonicModule,
		PortfolioGrowthChartModule,
		GenericChartModule,
		HoldingsAllocationGroupChartModule,
		GenericListModule,
		PieChartWrapperModule,
		HoldingsToPortfolioChartSeriesPipeModule,
		HoldingsToSectorChartSeriesPipeModule,
		HoldingsTableModule,
		GenericCardModule,
	],
	exports: [GroupDetailsStatsComponent],
})
export class GroupDetailsStatsModule {}
