import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ListSkeletonModule, NumberFormatterPipeModule, ReverseArrayPipeModule } from '@shared';
import { DetailsTransactionsComponent } from './details-transactions.component';

@NgModule({
	declarations: [DetailsTransactionsComponent],
	imports: [CommonModule, MatTableModule, ListSkeletonModule, ReverseArrayPipeModule, NumberFormatterPipeModule],
	exports: [DetailsTransactionsComponent],
})
export class DetailsTransactionsModule {}
