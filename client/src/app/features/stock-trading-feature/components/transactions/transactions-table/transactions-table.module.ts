import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DefaultImgDirectiveModule, ListSkeletonModule, PriceChangeItemModule } from '@shared';
import { TransactionsTableComponent } from './transactions-table.component';

@NgModule({
	declarations: [TransactionsTableComponent],
	imports: [CommonModule, MatTableModule, PriceChangeItemModule, DefaultImgDirectiveModule, ListSkeletonModule],
	exports: [TransactionsTableComponent],
})
export class TransactionsTableModule {}
