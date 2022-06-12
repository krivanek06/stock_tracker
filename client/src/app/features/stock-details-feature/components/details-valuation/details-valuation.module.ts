import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberFormatterPipeModule } from '@shared';
import { DetailsValuationComponent } from './details-valuation.component';

@NgModule({
	declarations: [DetailsValuationComponent],
	imports: [CommonModule, NumberFormatterPipeModule],
	exports: [DetailsValuationComponent],
})
export class DetailsValuationModule {}
