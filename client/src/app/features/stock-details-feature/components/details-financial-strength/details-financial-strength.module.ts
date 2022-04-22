import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberFormatterPipeModule } from '@shared';
import { DetailsFinancialStrengthComponent } from './details-financial-strength.component';

@NgModule({
	declarations: [DetailsFinancialStrengthComponent],
	imports: [CommonModule, NumberFormatterPipeModule],
	exports: [DetailsFinancialStrengthComponent],
})
export class DetailsFinancialStrengthModule {}
