import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import {
	FinancialChartContainerModule,
	GenericCardModule,
	GenericChartModule,
	GenericListModule,
	LoaderWrapperModule,
	MatCardWrapperModule,
	PieChartWrapperModule,
	StockSummaryContainerModule,
} from '@shared';
import { DetailsStockSuggestionChangeModule, StockSearchModule } from '@stock-details-feature';
import { HoldingsTableModule, PortfolioStateModule, TradeConfirmationPopOverModule, TradingBidAskModule } from '@stock-trading-feature';
import { TradingPage } from './trading.page';

const routes: Routes = [
	{
		path: '',
		component: TradingPage,
	},
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		TradeConfirmationPopOverModule,
		StockSearchModule,
		PortfolioStateModule,
		TradingBidAskModule,
		FinancialChartContainerModule,
		GenericListModule,
		GenericCardModule,
		StockSummaryContainerModule,
		HoldingsTableModule,
		GenericChartModule,
		DetailsStockSuggestionChangeModule,
		PieChartWrapperModule,
		MatButtonModule,
		LoaderWrapperModule,
		MatIconModule,
		MatCardWrapperModule,
	],
	declarations: [TradingPage],
})
export class TradingPageModule {}
