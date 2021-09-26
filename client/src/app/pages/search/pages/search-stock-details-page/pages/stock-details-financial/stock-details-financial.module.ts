import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DetailsStatementSheetModule } from '@stock-details-feature';
import { FinancialReportsContainerComponent, FinancialStatementsContainerComponent } from './containers';
import { StockDetailsFinancialComponent } from './stock-details-financial.component';

@NgModule({
	declarations: [StockDetailsFinancialComponent, FinancialStatementsContainerComponent, FinancialReportsContainerComponent],
	imports: [CommonModule, IonicModule, DetailsStatementSheetModule],
	exports: [StockDetailsFinancialComponent],
})
export class StockDetailsFinancialModule {}
