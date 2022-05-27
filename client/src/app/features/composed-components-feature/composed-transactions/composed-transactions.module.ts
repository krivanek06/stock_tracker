import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardWrapperModule } from '@shared';
import { TransactionsChartModule, TransactionsSummaryModule, TransactionsTableModule } from '@stock-trading-feature';
import { ComposedTransactionsComponent } from './composed-transactions.component';

@NgModule({
	declarations: [ComposedTransactionsComponent],
	imports: [CommonModule, TransactionsSummaryModule, TransactionsTableModule, TransactionsChartModule, MatCardWrapperModule, MatIconModule],
	exports: [ComposedTransactionsComponent],
})
export class ComposedTransactionsModule {}
