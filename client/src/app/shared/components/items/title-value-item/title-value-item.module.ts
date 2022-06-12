import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberFormatterPipeModule } from './../../../pipes';
import { TitleValueItemComponent } from './title-value-item.component';

@NgModule({
	declarations: [TitleValueItemComponent],
	imports: [CommonModule, NumberFormatterPipeModule],
	exports: [TitleValueItemComponent],
})
export class TitleValueItemModule {}
