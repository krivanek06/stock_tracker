import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketCompanyQuotesTableModule } from '@market-feature';
import { ChartKeyValueFormatterPipeModule, FinancialChartContainerModule, GenericExtensionPanelModule, PieChartWrapperModule } from '@shared';
import { MarketEtfComponent } from './market-etf.component';

const routes: Routes = [
	{
		path: '',
		component: MarketEtfComponent,
	},
];

@NgModule({
	declarations: [MarketEtfComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FinancialChartContainerModule,
		PieChartWrapperModule,
		ChartKeyValueFormatterPipeModule,
		GenericExtensionPanelModule,
		MarketCompanyQuotesTableModule,
	],
})
export class MarketEtfPageModule {}
