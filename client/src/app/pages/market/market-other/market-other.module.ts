import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { MarketCompanyQuotesTableModule, MarketSectorHeatMapModule } from '@market-feature';
import { ChartKeyValueFormatterPipeModule, FinancialChartContainerModule, GenericChartModule, GenericExtensionPanelModule } from '@shared';
import { MarketOtherComponent } from './market-other.component';

const routes: Routes = [
	{
		path: '',
		component: MarketOtherComponent,
	},
];

@NgModule({
	declarations: [MarketOtherComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		GenericExtensionPanelModule,
		GenericChartModule,
		FinancialChartContainerModule,
		MarketCompanyQuotesTableModule,
		MarketSectorHeatMapModule,
		MatExpansionModule,
		ChartKeyValueFormatterPipeModule,
	],
})
export class MarketOtherModule {}
