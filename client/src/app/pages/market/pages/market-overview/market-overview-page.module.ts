import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MarketChartBuilderModule } from '@market-feature';
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
	imports: [
		CommonModule,
		MarketChartBuilderModule,
		RouterModule.forChild(routes),
		FinancialChartContainerModule,
		IonicModule,
		GenericListModule,
		GenericChartModule,
	],
})
export class MarketOverviewPageModule {}
