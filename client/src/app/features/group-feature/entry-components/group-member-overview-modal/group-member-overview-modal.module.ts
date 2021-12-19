import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
	ComposedPortfolioAllocationChartsModule,
	ComposedPortfolioChartsModule,
	ComposedPortfolioHoldingsTableModule,
	ComposedTransactionsModule,
} from '@composed-components-feature';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule, GenericCardModule, GenericListModule, PieChartWrapperModule, RelativeTimePipeModule } from '@shared';
import {
	HoldingsTableModule,
	HoldingsToPortfolioChartSeriesPipeModule,
	HoldingsToSectorChartSeriesPipeModule,
	PortfolioChangeChartModule,
	PortfolioChangeModule,
	PortfolioGrowthChartModule,
	PortfolioIncreaseChartModule,
	PortfolioStateModule,
	TransactionsChartModule,
	TransactionsTableModule,
} from '@stock-trading-feature';
import { GroupMemberOverviewModalComponent } from './group-member-overview-modal.component';

@NgModule({
	declarations: [GroupMemberOverviewModalComponent],
	imports: [
		CommonModule,
		IonicModule,
		DefaultImgDirectiveModule,
		RelativeTimePipeModule,
		PortfolioStateModule,
		MatTooltipModule,
		PortfolioChangeModule,
		PortfolioIncreaseChartModule,
		PortfolioGrowthChartModule,
		PortfolioChangeChartModule,
		HoldingsTableModule,
		GenericListModule,
		GenericCardModule,
		PieChartWrapperModule,
		HoldingsToPortfolioChartSeriesPipeModule,
		HoldingsToSectorChartSeriesPipeModule,
		TransactionsTableModule,
		TransactionsChartModule,
		ComposedPortfolioChartsModule,
		ComposedTransactionsModule,
		ComposedPortfolioAllocationChartsModule,
		ComposedPortfolioHoldingsTableModule,
		MatDialogModule,
	],
	exports: [GroupMemberOverviewModalComponent],
})
export class GroupMemberOverviewModalModule {}
