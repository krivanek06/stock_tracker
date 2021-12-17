import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
	FinancialChartContainerModule,
	GenericCardModule,
	GenericChartModule,
	GenericListModule,
	HeaderModule,
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
		IonicModule,
		HeaderModule,
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
	],
	declarations: [TradingPage],
})
export class TradingPageModule {}
