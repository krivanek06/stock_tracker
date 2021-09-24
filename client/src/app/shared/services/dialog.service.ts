import { Injectable } from '@angular/core';
import { AlertController, PopoverController, ToastController } from '@ionic/angular';
import { ConfirmationPopOverComponent } from '../entry-components/confirmation-pop-over/confirmation-pop-over.component';
import { InlineInputPopUpComponent } from '../entry-components/inline-input-pop-up/inline-input-pop-up.component';
import { OptionPickerPopOverComponent } from '../entry-components/option-picker-pop-over/option-picker-pop-over.component';
import { IdNameContainer } from '../models';

@Injectable()
export class DialogService {
	private static alertController: AlertController;
	private static toastController: ToastController;
	private static popoverController: PopoverController;

	//private static modalController: ModalController | undefined;
	private static toaster: HTMLIonToastElement;

	constructor(private alertController: AlertController, private toastController: ToastController, private popoverController: PopoverController) {
		DialogService.alertController = alertController;
		DialogService.toastController = toastController;
		DialogService.popoverController = popoverController;
		//DialogService.modalController = modalController;
	}

	static async presentAlertConfirm(message: string, cancelButton = 'Cancel', confirmButton = 'Yes'): Promise<boolean> {
		if (!DialogService.alertController) {
			throw new Error('DialogService.alertController not initialized');
		}
		return new Promise(async (resolve) => {
			const alert = await DialogService.alertController.create({
				cssClass: 'my-custom-alert-class',
				message,
				buttons: [
					{
						text: confirmButton,
						handler: () => {
							resolve(true);
						},
					},
					{
						text: cancelButton,
						role: 'cancel',
						cssClass: 'secondary',
						handler: (blah) => {
							resolve(false);
						},
					},
				],
			});
			await alert.present();
		});
	}

	static async presentToast(message: string, duration: number = 2500): Promise<void> {
		if (!DialogService.toastController) {
			throw new Error('DialogService.toastController not initialized');
		}

		if (this.toaster) {
			this.toaster.dismiss();
		}

		this.toaster = await DialogService.toastController.create({
			message,
			duration,
			color: 'dark',
			position: 'bottom',
		});
		this.toaster.present();
	}

	// static async dissmissToast(): Promise<void> {
	// 	if (!DialogService.toastController) {
	// 		throw new Error('DialogService.toastController not initialized');
	// 	}
	// 	if (this.toaster) {
	// 		console.log('dissmiss');
	// 		this.toaster.dismiss();
	// 	}
	// }

	static async presentErrorToast(message): Promise<void> {
		if (!DialogService.toastController) {
			throw new Error('DialogService.toastController not initialized');
		}

		const toast = await DialogService.toastController.create({
			message,
			duration: 3500,
			color: 'danger',
			position: 'bottom',
		});
		toast.present();
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

	static async presentConfirmationPopOver(message: string, confirmButton: string = null, rejectButton: string = null): Promise<boolean> {
		if (!DialogService.popoverController) {
			throw new Error('DialogService.popoverController not initialized');
		}
		const popover = await DialogService.popoverController.create({
			component: ConfirmationPopOverComponent,
			cssClass: 'custom-popover',
			translucent: true,
			componentProps: {
				message,
				confirmButton,
				rejectButton,
			},
		});

		await popover.present();
		const res = await popover.onDidDismiss();
		return res?.data?.confirm;
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
