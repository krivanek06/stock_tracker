import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberFormatterPipeModule } from '@shared';
import { DetailsPerShareComponent } from './details-per-share.component';

@NgModule({
	declarations: [DetailsPerShareComponent],
	imports: [CommonModule, NumberFormatterPipeModule],
	exports: [DetailsPerShareComponent],
})
export class DetailsPerShareModule {}
