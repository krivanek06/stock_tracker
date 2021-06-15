import {Injectable} from '@angular/core';
import {AlertController, PopoverController, ToastController} from '@ionic/angular';
import {InlineInputPopUpComponent} from '../components/pop-ups';


@Injectable()
export class DialogService {
    private static alertController: AlertController;
    private static toastController: ToastController;
    private static popoverController: PopoverController;

    //private static modalController: ModalController | undefined;

    constructor(private alertController: AlertController,
                private toastController: ToastController,
                private popoverController: PopoverController,
    ) {
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

    static async presentToast(message): Promise<void> {
        if (!DialogService.toastController) {
            throw new Error('DialogService.toastController not initialized');
        }

        const toast = await DialogService.toastController.create({
            message,
            duration: 2500,
            color: 'dark',
            position: 'bottom',
        });
        toast.present();
    }

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

    static async presentInlineInputPopOver(): Promise<string> {
        if (!DialogService.popoverController) {
            throw new Error('DialogService.popoverController not initialized');
        }
        const popover = await DialogService.popoverController.create({
            component: InlineInputPopUpComponent,
            cssClass: 'custom-popover',
            translucent: true,
            componentProps: {inputLabel: 'Watchlist name'}
        });

        await popover.present();
        const res = await popover.onDidDismiss();
        return res?.data.inputData;
    }

}
