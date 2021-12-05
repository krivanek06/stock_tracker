import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopoverController } from '@ionic/angular';
import { ConfirmDialogComponent, InlineInputPopUpComponent, OptionPickerPopOverComponent } from '../entry-components';
import { IdNameContainer } from '../models';
import { NotificationProgressComponent } from './../components';

@Injectable()
export class DialogService {
	private static popoverController: PopoverController;
	private static snackBar: MatSnackBar;
	private static matDialog: MatDialog;

	constructor(private popoverController: PopoverController, private snackBar: MatSnackBar, private dialog: MatDialog) {
		DialogService.popoverController = popoverController;
		DialogService.snackBar = snackBar;
		DialogService.matDialog = dialog;
	}

	static async showConfirmDialog(dialogTitle: string, confirmButton: string = 'Confirm', cancelButton: string = 'Cancel'): Promise<boolean> {
		if (!DialogService.matDialog) {
			throw new Error('DialogService.matDialog not initialized');
		}

		const dialogRef = DialogService.matDialog.open(ConfirmDialogComponent, {
			data: {
				dialogTitle,
				confirmButton,
				cancelButton,
			},
		});

		const result = (await dialogRef.afterClosed().toPromise()) as boolean;
		return result;
	}

	static showNotificationBar(message: string, type: 'success' | 'error' | 'notification' = 'success', duration: number | undefined = 2500): void {
		if (!DialogService.snackBar) {
			throw new Error('DialogService.snackBar not initialized');
		}

		DialogService.snackBar.openFromComponent(NotificationProgressComponent, {
			horizontalPosition: 'end',
			verticalPosition: 'top',
			panelClass: ['g-custom-snack-bar'],
			duration,
			data: {
				message,
				type,
			},
		});
	}

	static async presentInlineInputPopOver(inputLabel: string): Promise<string> {
		if (!DialogService.popoverController) {
			throw new Error('DialogService.popoverController not initialized');
		}
		const popover = await DialogService.popoverController.create({
			component: InlineInputPopUpComponent,
			cssClass: 'custom-popover',
			translucent: true,
			componentProps: { inputLabel },
		});

		await popover.present();
		const res = await popover.onDidDismiss();
		return res?.data?.inputData;
	}

	static async presentOptionsPopOver(title: string, options: IdNameContainer[]): Promise<string> {
		if (!DialogService.popoverController) {
			throw new Error('DialogService.popoverController not initialized');
		}
		const popOver = await this.popoverController.create({
			component: OptionPickerPopOverComponent,
			componentProps: {
				title,
				options,
			},
			cssClass: 'custom-popover',
			translucent: true,
		});
		await popOver.present();

		const res = await popOver.onDidDismiss();
		return res?.data?.id;
	}
}
