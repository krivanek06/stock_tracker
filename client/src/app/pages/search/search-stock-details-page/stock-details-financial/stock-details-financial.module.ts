import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared';
import { DetailsStatementSheetModule } from '@stock-details-feature';
import { FinancialStatementsContainerComponent } from './containers';
import { StockDetailsFinancialComponent } from './stock-details-financial.component';

const routes: Routes = [
	{
		path: '',
		component: StockDetailsFinancialComponent,
	},
];

@NgModule({
	declarations: [StockDetailsFinancialComponent, FinancialStatementsContainerComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, DetailsStatementSheetModule, SharedModule],
})
export class StockDetailsFinancialModule {}
