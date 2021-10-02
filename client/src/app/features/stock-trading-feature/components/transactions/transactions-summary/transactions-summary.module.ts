import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransactionsSummaryComponent } from './transactions-summary.component';

@NgModule({
	declarations: [TransactionsSummaryComponent],
	imports: [CommonModule],
	exports: [TransactionsSummaryComponent],
})
export class TransactionsSummaryModule {}
