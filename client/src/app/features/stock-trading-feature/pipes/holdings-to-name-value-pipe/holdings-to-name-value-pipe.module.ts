import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HoldingsToNameValuePipe } from './holdings-to-name-value.pipe';

@NgModule({
	declarations: [HoldingsToNameValuePipe],
	imports: [CommonModule],
	exports: [HoldingsToNameValuePipe],
})
export class HoldingsToNameValuePipeModule {}
