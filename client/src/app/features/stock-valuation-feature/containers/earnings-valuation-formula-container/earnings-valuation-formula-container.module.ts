import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardWrapperModule, RangeRatingSliderModule } from '@shared';
import { EarningsValuationFormulaContainerComponent } from './earnings-valuation-formula-container.component';

@NgModule({
	declarations: [EarningsValuationFormulaContainerComponent],
	imports: [CommonModule, RangeRatingSliderModule, MatCardWrapperModule],
	exports: [EarningsValuationFormulaContainerComponent],
})
export class EarningsValuationFormulaContainerModule {}
