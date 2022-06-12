import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardWrapperModule, NumberFormatterPipeModule, PriceCompareItemModule } from '@shared';
import { FreeCashflowFormulaContainerComponent } from './free-cashflow-formula-container.component';

@NgModule({
	declarations: [FreeCashflowFormulaContainerComponent],
	imports: [CommonModule, NumberFormatterPipeModule, MatCardWrapperModule, PriceCompareItemModule, MatGridListModule, MatDividerModule],
	exports: [FreeCashflowFormulaContainerComponent],
})
export class FreeCashflowFormulaContainerModule {}
