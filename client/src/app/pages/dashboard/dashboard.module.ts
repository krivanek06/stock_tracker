import { DeactivatedAccountModule } from '@account-feature';
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
import { TitleValueItemModule } from '@shared';
import { PortfolioChangeModule, PortfolioStateModule } from '@stock-trading-feature';
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
		TitleValueItemModule,
		DeactivatedAccountModule,
	],
	declarations: [DashboardPage],
})
export class DashboardPageModule {}
