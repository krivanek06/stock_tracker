import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule, GenericListModule } from '@shared';
import { TransactionsChartModule, TransactionsSummaryModule, TransactionsTableModule } from '@stock-trading-feature';
import { ComposedTransactionsComponent } from './composed-transactions.component';

@NgModule({
	declarations: [ComposedTransactionsComponent],
	imports: [
		CommonModule,
		IonicModule,
		TransactionsSummaryModule,
		TransactionsTableModule,
		TransactionsChartModule,
		GenericCardModule,
		GenericListModule,
	],
	exports: [ComposedTransactionsComponent],
})
export class ComposedTransactionsModule {}
