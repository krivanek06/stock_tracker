import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardWrapperModule, NumberFormatterPipeModule, PriceCompareItemModule } from '@shared';
import { DiscountedCashflowFormulaContainerComponent } from './discounted-cashflow-formula-container.component';
@NgModule({
	declarations: [DiscountedCashflowFormulaContainerComponent],
	imports: [CommonModule, NumberFormatterPipeModule, MatCardWrapperModule, PriceCompareItemModule, MatGridListModule, MatDividerModule],
	exports: [DiscountedCashflowFormulaContainerComponent],
})
export class DiscountedCashflowFormulaContainerModule {}
