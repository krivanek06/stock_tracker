import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NumberFormatterPipeModule } from '../../../pipes';
import { PriceChangeItemComponent } from './price-change-item.component';

@NgModule({
	declarations: [PriceChangeItemComponent],
	exports: [PriceChangeItemComponent],
	imports: [CommonModule, NumberFormatterPipeModule, MatIconModule],
})
export class PriceChangeItemModule {}
