import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImgDirectiveModule, SeriesComparisonChartModule } from '@shared';
import {
	PortfolioChangeChartModule,
	PortfolioChangeModule,
	PortfolioGrowthChartModule,
	PortfolioIncreaseChartModule,
	PortfolioStateModule,
} from '@stock-trading-feature';
import { ComposedPortfolioAllocationChartsModule } from '../composed-portfolio-allocation-charts/composed-portfolio-allocation-charts.module';
import { ComposedPortfolioChartsModule } from '../composed-portfolio-charts/composed-portfolio-charts.module';
import { ComposedPortfolioHoldingsTableModule } from '../composed-portfolio-holdings-table/composed-portfolio-holdings-table.module';
import { ComposedTransactionsModule } from '../composed-transactions/composed-transactions.module';
import { ComposedSearchedUserDataComponent } from './composed-searched-user-data.component';

@NgModule({
	declarations: [ComposedSearchedUserDataComponent],
	imports: [
		CommonModule,
		PortfolioStateModule,
		PortfolioChangeModule,
		PortfolioIncreaseChartModule,
		PortfolioGrowthChartModule,
		ComposedPortfolioChartsModule,
		ComposedTransactionsModule,
		ComposedPortfolioAllocationChartsModule,
		ComposedPortfolioHoldingsTableModule,
		DefaultImgDirectiveModule,
		PortfolioGrowthChartModule,
		PortfolioChangeChartModule,
		SeriesComparisonChartModule,
	],
	exports: [ComposedSearchedUserDataComponent],
})
export class ComposedSearchedUserDataModule {}
