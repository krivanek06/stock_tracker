import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PriceChangeItemModule, PriceCompareItemModule } from '../../components';
import { RecommendationDirectiveModule } from '../../directives';
import { NumberFormatterPipeModule } from '../../pipes';
import { StockSummaryContainerComponent } from './stock-summary-container.component';

@NgModule({
	declarations: [StockSummaryContainerComponent],
	imports: [CommonModule, NumberFormatterPipeModule, PriceCompareItemModule, PriceChangeItemModule, RecommendationDirectiveModule],
	exports: [StockSummaryContainerComponent],
})
export class StockSummaryContainerModule {}
