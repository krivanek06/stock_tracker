import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberFormatterPipeModule } from '@shared';
import { DetailsFinancialStrengthRatioComponent } from './details-financial-strength-ratio.component';

@NgModule({
	declarations: [DetailsFinancialStrengthRatioComponent],
	imports: [CommonModule, NumberFormatterPipeModule],
	exports: [DetailsFinancialStrengthRatioComponent],
})
export class DetailsFinancialStrengthRatioModule {}
