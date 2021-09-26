import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
	DiscountedCashflowFormulaContainerModule,
	DividendDiscountedFormulaContainerModule,
	EarningsValuationFormulaContainerModule,
	FreeCashflowFormulaContainerModule,
} from '@stock-valuation-feature';
import { StockDetailsValuationComponent } from './stock-details-valuation.component';

@NgModule({
	declarations: [StockDetailsValuationComponent],
	imports: [
		CommonModule,
		FreeCashflowFormulaContainerModule,
		DiscountedCashflowFormulaContainerModule,
		EarningsValuationFormulaContainerModule,
		DividendDiscountedFormulaContainerModule,
	],
	exports: [StockDetailsValuationComponent],
})
export class StockDetailsValuationModule {}
