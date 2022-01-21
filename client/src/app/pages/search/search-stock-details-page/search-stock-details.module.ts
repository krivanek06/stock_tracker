import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SEARCH_PAGE_STOCK_DETAILS_ENUM } from '../models/pages.model';
import { SearchStockDetailsPage } from './search-stock-details-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchStockDetailsPage,
		children: [
			{
				path: '',
				redirectTo: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS,
				pathMatch: 'full',
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS,
				loadChildren: () => import('./stock-details-statistic/stock-details-statistic.module').then((m) => m.StockDetailsStatisticModule),
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIALS,
				loadChildren: () => import('./stock-details-financial/stock-details-financial.module').then((m) => m.StockDetailsFinancialModule),
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.VALUATION,
				loadChildren: () => import('./stock-details-valuation/stock-details-valuation.module').then((m) => m.StockDetailsValuationModule),
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.KEY_METRICS,
				loadChildren: () => import('./stock-details-key-metrics/stock-details-key-metrics.module').then((m) => m.StockDetailsKeyMetricsModule),
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.FiNANCIAL_RATIOS,
				loadChildren: () =>
					import('./stock-details-financial-ratios/stock-details-financial-ratios.module').then((m) => m.StockDetailsFinancialRatiosModule),
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIAL_GROWTH,
				loadChildren: () =>
					import('./stock-details-financial-growth/stock-details-financial-growth.module').then((m) => m.StockDetailsFinancialGrowthModule),
			},
		],
	},
];

@NgModule({
	declarations: [SearchStockDetailsPage],
	imports: [RouterModule.forChild(routes), CommonModule, IonicModule],
})
export class SearchStockDetailsModule {}
