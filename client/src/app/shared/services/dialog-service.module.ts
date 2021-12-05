import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IonicModule } from '@ionic/angular';
import { ConfirmDialogModule, InlineInputPopUpModule, OptionPickerPopOverModule } from '../entry-components';
import { DialogService } from './dialog.service';

@NgModule({
	declarations: [],
	imports: [IonicModule, InlineInputPopUpModule, OptionPickerPopOverModule, MatSnackBarModule, MatDialogModule, ConfirmDialogModule],
	providers: [DialogService],
	exports: [IonicModule, InlineInputPopUpModule, OptionPickerPopOverModule, MatSnackBarModule, MatDialogModule, ConfirmDialogModule],
})
export class DialogServiceModule {}
