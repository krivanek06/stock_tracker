
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserPageComponent } from './search-user-page.component';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {UserAccountSearchModule} from "@account-feature";
import {DefaultImgDirectiveModule, GenericCardModule, GenericListModule, PieChartWrapperModule} from "@shared";
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
	TransactionsTableModule
} from "@stock-trading-feature";

const routes: Routes = [
	{
		path: '',
		component: SearchUserPageComponent,
	},
];

@NgModule({
	declarations: [SearchUserPageComponent],
	imports: [RouterModule.forChild(routes), CommonModule, IonicModule, UserAccountSearchModule, DefaultImgDirectiveModule, PortfolioStateModule, PortfolioChangeModule, PortfolioIncreaseChartModule, PortfolioGrowthChartModule, HoldingsTableModule, GenericListModule, GenericCardModule, HoldingsToSectorChartSeriesPipeModule, PieChartWrapperModule, HoldingsToPortfolioChartSeriesPipeModule, TransactionsTableModule, TransactionsChartModule, PortfolioChangeChartModule,],
})
export class SearchUserPageModule {}
