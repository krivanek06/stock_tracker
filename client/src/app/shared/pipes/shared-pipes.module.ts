import { NgModule } from '@angular/core';
import { ChartKeyValueFormatterPipe } from './chart-key-value-formatter.pipe';
import { HoldingsTotalInvestedPipe } from './holdings-total-invested.pipe';
import { IncreasePrctPipe } from './increase-prct.pipe';
import { NumberFormatterPipe } from './numberFormatter.pipe';
import { ObjNgForPipe } from './obj-ng-for.pipe';
import { RelativeTimePipe } from './relatimeTime.pipe';
import { ReverseArrayPipe } from './reverse-array.pipe';
import { SplitKeyToTitlecasePipe } from './split-key-to-titlecase.pipe';
import { SplitPipe } from './split.pipe';
import { SumUpPipe } from './sumUp.pipe';
import { TypeofPipe } from './typeof.pipe';

@NgModule({
	declarations: [
		ChartKeyValueFormatterPipe,
		HoldingsTotalInvestedPipe,
		IncreasePrctPipe,
		NumberFormatterPipe,
		ObjNgForPipe,
		RelativeTimePipe,
		ReverseArrayPipe,
		SplitKeyToTitlecasePipe,
		SplitPipe,
		SumUpPipe,
		TypeofPipe,
	],
	exports: [
		ChartKeyValueFormatterPipe,
		HoldingsTotalInvestedPipe,
		IncreasePrctPipe,
		NumberFormatterPipe,
		ObjNgForPipe,
		RelativeTimePipe,
		ReverseArrayPipe,
		SplitKeyToTitlecasePipe,
		SplitPipe,
		SumUpPipe,
		TypeofPipe,
	],
})
export class SharedPipesModule {}
