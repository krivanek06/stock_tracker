import { UserAccountSearchModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
	ComposedPortfolioAllocationChartsModule,
	ComposedPortfolioChartsModule,
	ComposedPortfolioHoldingsTableModule,
	ComposedTransactionsModule,
} from '@composed-components-feature';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule } from '@shared';
import { PortfolioChangeModule, PortfolioGrowthChartModule, PortfolioIncreaseChartModule, PortfolioStateModule } from '@stock-trading-feature';
import { SearchUserPageComponent } from './search-user-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchUserPageComponent,
	},
];

@NgModule({
	declarations: [SearchUserPageComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		IonicModule,
		UserAccountSearchModule,
		PortfolioStateModule,
		PortfolioChangeModule,
		PortfolioIncreaseChartModule,
		PortfolioGrowthChartModule,
		ComposedPortfolioChartsModule,
		ComposedTransactionsModule,
		ComposedPortfolioAllocationChartsModule,
		ComposedPortfolioHoldingsTableModule,
		DefaultImgDirectiveModule,
	],
})
export class SearchUserPageModule {}
