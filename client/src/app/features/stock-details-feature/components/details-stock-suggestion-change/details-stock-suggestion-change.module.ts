import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImgDirectiveModule, GenericChartModule, MatCardWrapperModule, PriceCompareItemModule } from '@shared';
import { DetailsStockSuggestionChangeComponent } from './details-stock-suggestion-change.component';

@NgModule({
	declarations: [DetailsStockSuggestionChangeComponent],
	imports: [CommonModule, MatCardWrapperModule, PriceCompareItemModule, GenericChartModule, DefaultImgDirectiveModule],
	exports: [DetailsStockSuggestionChangeComponent],
})
export class DetailsStockSuggestionChangeModule {}
