import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPortfolioChangeComponent } from './dashboard-portfolio-change/dashboard-portfolio-change.component';
import { DashboardPage } from './dashboard.page';
import {
	HoldingsTableModule,
	HoldingsToPortfolioChartSeriesPipeModule,
	HoldingsToSectorChartSeriesPipeModule,
	PortfolioChangeChartModule,
	PortfolioChangeModule,
	PortfolioGrowthChartModule,
	PortfolioStateModule, TransactionsChartModule, TransactionsTableModule
} from "@stock-trading-feature";
import {IonicModule} from "@ionic/angular";
import {GenericCardModule, GenericListModule, HeaderModule, PieChartWrapperModule} from "@shared";
import {MenuHeaderModule} from "@pages-shared";

const routes: Routes = [
	{
		path: '',
		component: DashboardPage,
	},
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		PortfolioChangeModule,
		IonicModule,
		HeaderModule,
		MenuHeaderModule,
		PortfolioStateModule,
		PortfolioGrowthChartModule,
		HoldingsTableModule,
		GenericCardModule,
		GenericListModule,
		PortfolioChangeChartModule,
		PieChartWrapperModule,
		HoldingsToSectorChartSeriesPipeModule,
		HoldingsToPortfolioChartSeriesPipeModule,
		TransactionsTableModule,
		TransactionsChartModule,
	],
	declarations: [
		DashboardPage,
		DashboardPortfolioChangeComponent,
	],
})
export class DashboardPageModule {}
