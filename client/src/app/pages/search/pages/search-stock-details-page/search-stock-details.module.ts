import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchStockDetailsPage } from './search-stock-details-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchStockDetailsPage,
		children: [
			{
				path: '',
				redirectTo: 'statistics',
				pathMatch: 'full',
			},
			{
				path: 'statistics',
				loadChildren: () => import('./pages/stock-details-statistic/stock-details-statistic.module').then((m) => m.StockDetailsStatisticModule),
			},
			{
				path: 'financials',
				loadChildren: () => import('./pages/stock-details-financial/stock-details-financial.module').then((m) => m.StockDetailsFinancialModule),
			},
			{
				path: 'valuation',
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
