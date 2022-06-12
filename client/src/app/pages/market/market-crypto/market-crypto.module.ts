import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { MarketCryptoDialogModule, MarketTopTableCryptoModule } from '@market-feature';
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
		RouterModule.forChild(routes),
		FinancialChartContainerModule,
		GenericChartModule,
		MarketTopTableCryptoModule,
		GenericListModule,
		GenericCardModule,
		MatDialogModule,
		MarketCryptoDialogModule,
	],
})
export class MarketCryptoModule {}
