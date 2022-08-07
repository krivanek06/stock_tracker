import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArrayLastValuePipeModule, ConvertToSeriesModule, GenericChartModule, MatCardWrapperModule, SharedModule } from '@shared';
import { StockDetailsKeyMetricsComponent } from './stock-details-key-metrics.component';

const routes: Routes = [
	{
		path: '',
		component: StockDetailsKeyMetricsComponent,
	},
];

@NgModule({
	declarations: [StockDetailsKeyMetricsComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
		MatCardWrapperModule,
		GenericChartModule,
		ConvertToSeriesModule,
		IonicModule,
		ArrayLastValuePipeModule,
	],
})
export class StockDetailsKeyMetricsModule {}
