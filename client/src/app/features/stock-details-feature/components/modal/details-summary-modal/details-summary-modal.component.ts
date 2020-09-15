import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { SummaryProfile} from '../../../model/stockDetails';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-details-summary-modal',
    templateUrl: './details-summary-modal.component.html',
    styleUrls: ['./details-summary-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsSummaryModalComponent implements OnInit {
    summaryProfile: SummaryProfile;
    symbol: string;

    constructor(private modalController: ModalController,
                private navParams: NavParams) {
        this.summaryProfile = this.navParams.get('summaryProfile');
        this.symbol = this.navParams.get('symbol');
        console.log('pop up', this.summaryProfile);
    }

    ngOnInit() {
    }

    dismissModal() {
        this.modalController.dismiss();
    }

}
