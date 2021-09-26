import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StockDetailsFinancialModule, StockDetailsStatisticModule, StockDetailsValuationModule } from './pages';
import { SearchStockDetailsPage } from './search-stock-details-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchStockDetailsPage,
	},
];

@NgModule({
	declarations: [SearchStockDetailsPage],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		IonicModule,
		StockDetailsStatisticModule,
		StockDetailsFinancialModule,
		StockDetailsValuationModule,
	],
})
export class SearchStockDetailsModule {}
