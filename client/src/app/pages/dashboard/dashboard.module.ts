import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import {
	ComposedPortfolioAllocationChartsModule,
	ComposedPortfolioChartsModule,
	ComposedPortfolioHoldingsTableModule,
	ComposedTransactionsModule,
	MenuHeaderModule,
} from '@composed-components-feature';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '@shared';
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
		IonicModule,
		HeaderModule,
		MenuHeaderModule,
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
