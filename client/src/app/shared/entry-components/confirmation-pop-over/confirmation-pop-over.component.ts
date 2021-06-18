import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-confirmation-pop-over',
    templateUrl: './confirmation-pop-over.component.html',
    styleUrls: ['./confirmation-pop-over.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationPopOverComponent implements OnInit {

    message: string;
    confirmButton: string;
    rejectButton: string;

    confirmCheckbox = false;

    constructor(private navParams: NavParams,
                private popoverController: PopoverController) {
    }

    ngOnInit() {
        this.message = this.navParams.get('message');
        this.confirmButton = this.navParams.get('confirmButton');
        this.rejectButton = this.navParams.get('rejectButton');
    }

    confirm() {
        this.popoverController.dismiss({confirm: true});
    }

    reject() {
        this.popoverController.dismiss({confirm: false});
    }

}
