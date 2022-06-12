import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ListSkeletonModule, NumberFormatterPipeModule, PositionChangeItemModule, SumUpPipeModule } from '@shared';
import { DetailsHoldersComponent } from './details-holders.component';

@NgModule({
	declarations: [DetailsHoldersComponent],
	imports: [CommonModule, NumberFormatterPipeModule, MatTableModule, PositionChangeItemModule, SumUpPipeModule, ListSkeletonModule],
	exports: [DetailsHoldersComponent],
})
export class DetailsHoldersModule {}
