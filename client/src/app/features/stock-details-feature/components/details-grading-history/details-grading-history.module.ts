import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ListSkeletonModule, RelativeTimePipeModule } from '@shared';
import { DetailsGradingHistoryComponent } from './details-grading-history.component';

@NgModule({
	declarations: [DetailsGradingHistoryComponent],
	imports: [CommonModule, MatTableModule, RelativeTimePipeModule, ListSkeletonModule, MatIconModule],
	exports: [DetailsGradingHistoryComponent],
})
export class DetailsGradingHistoryModule {}
