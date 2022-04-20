import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberFormatterPipeModule } from '../../../pipes';
import { PriceChangeItemModule } from '../price-change-item/price-change-item.module';
import { PriceCompareItemComponent } from './price-compare-item.component';

@NgModule({
	declarations: [PriceCompareItemComponent],
	imports: [CommonModule, NumberFormatterPipeModule, PriceChangeItemModule],
	exports: [PriceCompareItemComponent],
})
export class PriceCompareItemModule {}
