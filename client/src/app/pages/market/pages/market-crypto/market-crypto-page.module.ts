import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MarketChartBuilderModule, MarketTopTableCryptoModule } from '@market-feature';
import { FinancialChartContainerModule, GenericCardModule, GenericChartModule, GenericListModule } from '@shared';
import { MarketCryptoComponent } from './market-crypto.component';

const routes: Routes = [
	{
		path: '',
		component: MarketCryptoComponent,
	},
];

@NgModule({
	declarations: [MarketCryptoComponent],
	imports: [
		CommonModule,
		MarketChartBuilderModule,
		RouterModule.forChild(routes),
		IonicModule,
		FinancialChartContainerModule,
		GenericListModule,
		GenericChartModule,
		MarketTopTableCryptoModule,
		GenericCardModule,
	],
})
export class MarketCryptoPageModule {}
