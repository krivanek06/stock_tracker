import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
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
import { DetailsStatementSheetComponent } from './details-statement-sheet.component';

@NgModule({
	declarations: [DetailsStatementSheetComponent],
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
	],
	exports: [DetailsStatementSheetComponent],
})
export class DetailsStatementSheetModule {}
