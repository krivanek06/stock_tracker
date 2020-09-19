import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-details-summary-modal',
    templateUrl: './details-summary-modal.component.html',
    styleUrls: ['./details-summary-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsSummaryModalComponent implements OnInit {
    logo: string;
    summary: string;
    symbol: string;

    constructor(private modalController: ModalController,
                private navParams: NavParams) {
        this.logo = this.navParams.get('logo');
        this.summary = this.navParams.get('summary');
        this.symbol = this.navParams.get('symbol');
    }

    ngOnInit() {
    }

    dismissModal() {
        this.modalController.dismiss();
    }

}
