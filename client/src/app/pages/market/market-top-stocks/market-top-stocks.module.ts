import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketCompanyQuotesTableModule } from '@market-feature';
import { GenericCardModule, GenericListModule } from '@shared';
import { MarketTopStocksComponent } from './market-top-stocks.component';

const routes: Routes = [
	{
		path: '',
		component: MarketTopStocksComponent,
	},
];

@NgModule({
	declarations: [MarketTopStocksComponent],
	imports: [CommonModule, RouterModule.forChild(routes), MarketCompanyQuotesTableModule, GenericCardModule, GenericListModule],
})
export class MarketTopStocksModule {}
