import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
	DiscountedCashflowFormulaContainerModule,
	DividendDiscountedFormulaContainerModule,
	EarningsValuationFormulaContainerModule,
	FreeCashflowFormulaContainerModule,
} from '@stock-valuation-feature';
import { StockDetailsValuationComponent } from './stock-details-valuation.component';

const routes: Routes = [
	{
		path: '',
		component: StockDetailsValuationComponent,
	},
];
@NgModule({
	declarations: [StockDetailsValuationComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FreeCashflowFormulaContainerModule,
		DiscountedCashflowFormulaContainerModule,
		EarningsValuationFormulaContainerModule,
		DividendDiscountedFormulaContainerModule,
	],
})
export class StockDetailsValuationModule {}
