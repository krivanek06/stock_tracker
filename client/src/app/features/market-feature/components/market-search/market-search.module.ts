import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import {
	FormMatInputLockWrapperModule,
	ListSkeletonModule,
	NumberFormatterPipeModule,
	PriceCompareItemModule,
	SplitPipeModule,
	TableHighLowRangeModule,
} from '@shared';
import { MarketSearchFormResultComponent } from './market-search-form-result/market-search-form-result.component';
import { MarketSearchFormComponent } from './market-search-form/market-search-form.component';
import { MarketSearchTableComponent } from './market-search-table/market-search-table.component';

@NgModule({
	declarations: [MarketSearchFormComponent, MarketSearchFormResultComponent, MarketSearchTableComponent],
	imports: [
		CommonModule,
		IonicModule,
		PriceCompareItemModule,
		NumberFormatterPipeModule,
		TableHighLowRangeModule,
		ListSkeletonModule,
		MatIconModule,
		FormMatInputLockWrapperModule,
		ReactiveFormsModule,
		SplitPipeModule,
	],
	exports: [MarketSearchFormComponent, MarketSearchFormResultComponent, MarketSearchTableComponent],
})
export class MarketSearchModule {}
