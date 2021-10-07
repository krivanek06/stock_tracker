import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GenericChartModule, PieChartWrapperModule } from '@shared';
import {
	HoldingsToNameValuePipeModule,
	HoldingsToPortfolioChartSeriesPipeModule,
	HoldingsToSectorChartSeriesPipeModule,
} from '@stock-trading-feature';
import { ComposedPortfolioAllocationChartsComponent } from './composed-portfolio-allocation-charts.component';

@NgModule({
	declarations: [ComposedPortfolioAllocationChartsComponent],
	imports: [
		CommonModule,
		IonicModule,
		GenericChartModule,
		PieChartWrapperModule,
		HoldingsToPortfolioChartSeriesPipeModule,
		HoldingsToNameValuePipeModule,
		HoldingsToSectorChartSeriesPipeModule,
	],
	exports: [ComposedPortfolioAllocationChartsComponent],
})
export class ComposedPortfolioAllocationChartsModule {}
