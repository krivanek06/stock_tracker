import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PortfolioIncreaseChartComponent } from './components';
import { HoldingsAllocationGroupChartComponent, HoldingsTableComponent } from './components/holdings';
import {
	PortfolioChangeChartComponent,
	PortfolioChangeComponent,
	PortfolioGrowthChartComponent,
	PortfolioStateComponent,
} from './components/portfolio';
import { TransactionsChartComponent, TransactionsTableComponent } from './components/transactions';
import { TradeConfirmationPopOverComponent } from './entry-components';
import { HoldingsToPortfolioChartSeriesPipe } from './pipes/holdings-to-portfolio-chart-series.pipe';
import { HoldingsToSectorChartSeriesPipe } from './pipes/holdings-to-sector-chart-series.pipe';

@NgModule({
	declarations: [
		TransactionsTableComponent,
		PortfolioChangeComponent,
		HoldingsTableComponent,
		TradeConfirmationPopOverComponent,
		TransactionsChartComponent,
		PortfolioChangeChartComponent,
		PortfolioGrowthChartComponent,
		PortfolioStateComponent,
		HoldingsAllocationGroupChartComponent,
		HoldingsToSectorChartSeriesPipe,
		HoldingsToPortfolioChartSeriesPipe,
		PortfolioIncreaseChartComponent,
	],
	imports: [SharedModule],
	exports: [
		TransactionsTableComponent,
		PortfolioChangeComponent,
		HoldingsTableComponent,
		TradeConfirmationPopOverComponent,
		TransactionsChartComponent,
		PortfolioChangeChartComponent,
		PortfolioGrowthChartComponent,
		PortfolioStateComponent,
		HoldingsAllocationGroupChartComponent,
		HoldingsToSectorChartSeriesPipe,
		HoldingsToPortfolioChartSeriesPipe,
		PortfolioIncreaseChartComponent,
	],
})
export class StockTradingFeatureModule {}
