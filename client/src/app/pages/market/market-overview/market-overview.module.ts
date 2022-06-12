import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialChartContainerModule, GenericChartModule, GenericListModule } from '@shared';
import { MarketOverviewComponent } from './market-overview.component';

const routes: Routes = [
	{
		path: '',
		component: MarketOverviewComponent,
	},
];

@NgModule({
	declarations: [MarketOverviewComponent],
	imports: [CommonModule, RouterModule.forChild(routes), GenericChartModule, FinancialChartContainerModule, GenericListModule],
})
export class MarketOverviewModule {}
