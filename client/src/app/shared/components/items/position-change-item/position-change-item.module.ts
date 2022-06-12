import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NumberFormatterPipeModule } from '../../../pipes';
import { PositionChangeItemComponent } from './position-change-item.component';

@NgModule({
	declarations: [PositionChangeItemComponent],
	imports: [CommonModule, MatIconModule, NumberFormatterPipeModule],
	exports: [PositionChangeItemComponent],
})
export class PositionChangeItemModule {}
