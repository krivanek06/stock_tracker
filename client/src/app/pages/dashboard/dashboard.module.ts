import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuHeaderModule } from '@pages-shared';
import { GenericCardModule, GenericListModule, HeaderModule, PieChartWrapperModule } from '@shared';
import {
	HoldingsTableModule,
	HoldingsToPortfolioChartSeriesPipeModule,
	HoldingsToSectorChartSeriesPipeModule,
	PortfolioChangeChartModule,
	PortfolioChangeModule,
	PortfolioGrowthChartModule,
	PortfolioStateModule,
	TransactionsChartModule,
	TransactionsSummaryModule,
	TransactionsTableModule,
} from '@stock-trading-feature';
import { DashboardPortfolioChangeComponent } from './dashboard-portfolio-change/dashboard-portfolio-change.component';
import { DashboardPage } from './dashboard.page';

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
		TransactionsSummaryModule,
	],
	declarations: [DashboardPage, DashboardPortfolioChangeComponent],
})
export class DashboardPageModule {}
