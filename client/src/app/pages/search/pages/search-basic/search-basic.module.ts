import { UserAccountSearchModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
	ComposedPortfolioAllocationChartsModule,
	ComposedPortfolioChartsModule,
	ComposedPortfolioHoldingsTableModule,
	ComposedTransactionsModule,
} from '@composed-components-feature';
import { GroupTopUsersInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { MarketSearchModule } from '@market-feature';
import {
	DefaultImgDirectiveModule,
	FormMatInputWrapperModule,
	GenericCardModule,
	GenericExtensionPanelModule,
	GenericListModule,
	PieChartWrapperModule,
} from '@shared';
import {
	HoldingsTableModule,
	HoldingsToPortfolioChartSeriesPipeModule,
	HoldingsToSectorChartSeriesPipeModule,
	PortfolioChangeChartModule,
	PortfolioChangeModule,
	PortfolioGrowthChartModule,
	PortfolioIncreaseChartModule,
	PortfolioStateModule,
	TransactionsChartModule,
	TransactionsTableModule,
} from '@stock-trading-feature';
import { SearchGroupPageComponent } from './pages/search-group-page/search-group-page.component';
import { SearchStockPageComponent } from './pages/search-stock-page/search-stock-page.component';
import { SearchUserPageComponent } from './pages/search-user-page/search-user-page.component';
import { SearchBasicComponent } from './search-basic.component';

const routes: Routes = [
	{
		path: '',
		component: SearchBasicComponent,
	},
];

@NgModule({
	declarations: [SearchBasicComponent, SearchGroupPageComponent, SearchStockPageComponent, SearchUserPageComponent],
	imports: [
		CommonModule,
		IonicModule,
		GenericCardModule,
		FormMatInputWrapperModule,
		ReactiveFormsModule,
		GroupTopUsersInformationModule,
		MarketSearchModule,
		UserAccountSearchModule,
		DefaultImgDirectiveModule,
		PortfolioStateModule,
		PortfolioChangeModule,
		PortfolioIncreaseChartModule,
		PortfolioGrowthChartModule,
		HoldingsTableModule,
		GenericListModule,
		HoldingsToSectorChartSeriesPipeModule,
		PieChartWrapperModule,
		HoldingsToPortfolioChartSeriesPipeModule,
		TransactionsTableModule,
		TransactionsChartModule,
		PortfolioChangeChartModule,
		GenericExtensionPanelModule,
		ComposedPortfolioChartsModule,
		ComposedTransactionsModule,
		ComposedPortfolioAllocationChartsModule,
		ComposedPortfolioHoldingsTableModule,
		RouterModule.forChild(routes),
	],
})
export class SearchBasicModule {}
