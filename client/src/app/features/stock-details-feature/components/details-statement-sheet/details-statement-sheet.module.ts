import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { IonicModule } from '@ionic/angular';
import {
	GenericCardModule,
	IncreasePrctPipeModule,
	MatCardWrapperModule,
	ObjNgForPipeModule,
	PriceChangeItemModule,
	SplitKeyToTitlecasePipeModule,
	TypeofPipeModule,
} from '@shared';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { IncomeStatementComponent } from './income-statement/income-statement.component';
@NgModule({
	declarations: [BalanceSheetComponent, IncomeStatementComponent, CashFlowComponent],
	imports: [
		CommonModule,
		TypeofPipeModule,
		ObjNgForPipeModule,
		IonicModule,
		IncreasePrctPipeModule,
		PriceChangeItemModule,
		GenericCardModule,
		SplitKeyToTitlecasePipeModule,
		MatTableModule,
		MatCardWrapperModule,
		MatTabsModule,
		ScrollingModule,
	],
	exports: [BalanceSheetComponent, IncomeStatementComponent, CashFlowComponent],
})
export class DetailsStatementSheetModule {}
