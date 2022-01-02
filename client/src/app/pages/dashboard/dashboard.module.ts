import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import {
	ComposedPortfolioAllocationChartsModule,
	ComposedPortfolioChartsModule,
	ComposedPortfolioHoldingsTableModule,
	ComposedTransactionsModule,
} from '@composed-components-feature';
import { PortfolioChangeModule, PortfolioStateModule } from '@stock-trading-feature';
import { DashboardPortfolioChangeComponent } from './containers';
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
		MatIconModule,
		PortfolioStateModule,
		ComposedPortfolioChartsModule,
		ComposedTransactionsModule,
		ComposedPortfolioAllocationChartsModule,
		ComposedPortfolioHoldingsTableModule,
		PortfolioChangeModule,
	],
	declarations: [DashboardPage, DashboardPortfolioChangeComponent],
})
export class DashboardPageModule {}
