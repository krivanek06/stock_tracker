import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupFeatureModule } from '@group-feature';
import { PagesSharedModule } from '@pages-shared';
import { StockDetailsFeatureModule } from '@stock-details-feature';
import { StockTradingFeatureModule } from '@stock-trading-feature';
import { StockWatchlistModule } from '@stock-watchlist-feature';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardHoldingsTableComponent } from './dashboard-holdings-table/dashboard-holdings-table.component';
import { DashboardPortfolioChangeChartsComponent } from './dashboard-portfolio-change-charts/dashboard-portfolio-change-charts.component';
import { DashboardPortfolioChangeComponent } from './dashboard-portfolio-change/dashboard-portfolio-change.component';
import { DashboardTransactionsComponent } from './dashboard-transactions/dashboard-transactions.component';
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
		StockWatchlistModule,
		SharedModule,
		RouterModule.forChild(routes),
		GroupFeatureModule,
		StockTradingFeatureModule,
		StockDetailsFeatureModule,
		PagesSharedModule,
	],
	declarations: [
		DashboardPage,
		DashboardTransactionsComponent,
		DashboardHoldingsTableComponent,
		DashboardPortfolioChangeChartsComponent,
		DashboardPortfolioChangeComponent,
	],
})
export class DashboardPageModule {}
