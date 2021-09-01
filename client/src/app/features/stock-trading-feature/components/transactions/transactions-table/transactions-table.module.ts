import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule, PriceChangeItemModule } from '@shared';
import { TransactionsTableComponent } from './transactions-table.component';

@NgModule({
	declarations: [TransactionsTableComponent],
	imports: [CommonModule, IonicModule, PriceChangeItemModule, DefaultImgDirectiveModule],
	exports: [TransactionsTableComponent],
})
export class TransactionsTableModule {}
