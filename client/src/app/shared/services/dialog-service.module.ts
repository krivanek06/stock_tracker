import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IonicModule } from '@ionic/angular';
import { ConfirmDialogModule, FinancialChartModalModule, InlineInputPopUpModule, OptionPickerPopOverModule } from '../entry-components';
import { DialogService } from './dialog.service';

@NgModule({
	declarations: [],
	imports: [
		IonicModule,
		InlineInputPopUpModule,
		OptionPickerPopOverModule,
		MatSnackBarModule,
		MatDialogModule,
		ConfirmDialogModule,
		FinancialChartModalModule,
	],
	providers: [DialogService],
	exports: [
		IonicModule,
		InlineInputPopUpModule,
		OptionPickerPopOverModule,
		MatSnackBarModule,
		MatDialogModule,
		ConfirmDialogModule,
		FinancialChartModalModule,
	],
})
export class DialogServiceModule {}
