import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuHeaderModule } from '@pages-shared';
import { GenericCardModule, GenericListModule, HeaderModule, PieChartWrapperModule } from '@shared';
import {
	HoldingsTableModule,
	HoldingsToNameValuePipeModule,
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
import { GenericChartModule } from './../../shared/components/charts/generic-chart/generic-chart.module';
import { DashboardPortfolioChangeComponent, DashboardPortfolioChartsComponent } from './containers';
import { DashboardAllocationChartsComponent } from './containers/dashboard-allocation-charts/dashboard-allocation-charts.component';
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
		GenericChartModule,
		HoldingsToNameValuePipeModule,
	],
	declarations: [DashboardPage, DashboardPortfolioChangeComponent, DashboardPortfolioChartsComponent, DashboardAllocationChartsComponent],
})
export class DashboardPageModule {}
