import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArrayLastValuePipeModule, ConvertToSeriesModule, GenericChartModule, MatCardWrapperModule, SharedModule } from '@shared';
import { StockDetailsFinancialGrowthComponent } from './stock-details-financial-growth.component';

const routes: Routes = [
	{
		path: '',
		component: StockDetailsFinancialGrowthComponent,
	},
];

@NgModule({
	declarations: [StockDetailsFinancialGrowthComponent],
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
export class StockDetailsFinancialGrowthModule {}
