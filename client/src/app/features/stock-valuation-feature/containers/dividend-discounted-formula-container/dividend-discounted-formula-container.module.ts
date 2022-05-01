import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardWrapperModule } from '@shared';
import { DividendDiscountedFormulaContainerComponent } from './dividend-discounted-formula-container.component';

@NgModule({
	declarations: [DividendDiscountedFormulaContainerComponent],
	imports: [CommonModule, MatCardWrapperModule],
	exports: [DividendDiscountedFormulaContainerComponent],
})
export class DividendDiscountedFormulaContainerModule {}
