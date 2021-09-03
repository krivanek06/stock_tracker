import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SEARCH_PAGE_STOCK_DETAILS_ENUM } from '../../models/pages.model';
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
				loadChildren: () => import('./pages/stock-details-statistic/stock-details-statistic.module').then((m) => m.StockDetailsStatisticModule),
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIALS,
				loadChildren: () => import('./pages/stock-details-financial/stock-details-financial.module').then((m) => m.StockDetailsFinancialModule),
			},
			{
				path: SEARCH_PAGE_STOCK_DETAILS_ENUM.VALUATION,
				loadChildren: () => import('./pages/stock-details-valuation/stock-details-valuation.module').then((m) => m.StockDetailsValuationModule),
			},
		],
	},
];

@NgModule({
	declarations: [SearchStockDetailsPage],
	imports: [RouterModule.forChild(routes), CommonModule, IonicModule],
})
export class SearchStockDetailsModule {}
