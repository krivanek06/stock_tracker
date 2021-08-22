import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketFeatureModule } from '@market-feature';
import { PagesSharedModule } from '@pages-shared';
import { SharedModule } from '@shared';
import { StockDetailsFeatureModule } from '@stock-details-feature';
import { StockTradingStrategyFeatureModule } from '@stock-trading-strategy-feature';
import { StockValuationFeatureModule } from '@stock-valuation-feature';
import { SEARCH_PAGE_STOCK_DETAILS_ENUM } from '../../../models/pages.model';
import {
	StockDetailsFinancialComponent,
	StockDetailsStatisticComponent,
	StockDetailsStrategiesComponent,
	StockDetailsValuationComponent,
} from './pages';
import { StockDetailsFinancialModule } from './pages/stock-details-financial/stock-details-financial.module';
import { SearchStockDetailsPage } from './search-stock-details-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchStockDetailsPage,
		children: [
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS,
				component: StockDetailsStatisticComponent,
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIALS,
				component: StockDetailsFinancialComponent,
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.STRATEGIES,
				component: StockDetailsStrategiesComponent,
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.VALUATION,
				component: StockDetailsValuationComponent,
			},
			{
				path: '',
				redirectTo: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS,
			},
		],
	},
];

@NgModule({
	declarations: [SearchStockDetailsPage, StockDetailsStatisticComponent, StockDetailsStrategiesComponent, StockDetailsValuationComponent],
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		StockDetailsFeatureModule,
		StockTradingStrategyFeatureModule,
		StockValuationFeatureModule,
		StockDetailsFinancialModule,
		MarketFeatureModule,
		PagesSharedModule,
	],
})
export class SearchStockDetailsModule {}