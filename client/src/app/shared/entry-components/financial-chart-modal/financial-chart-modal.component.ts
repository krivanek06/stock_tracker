import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SymbolIdentification} from '../../models';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-financial-chart-modal',
    templateUrl: './financial-chart-modal.component.html',
    styleUrls: ['./financial-chart-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialChartModalComponent implements OnInit {
    symbolIdentification: SymbolIdentification;
    logoUrl: string;
    isCrypto = false;

    constructor(private navParams: NavParams,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.symbolIdentification = this.navParams.get('symbolIdentification');
        this.logoUrl = this.navParams.get('logoUrl');
        this.isCrypto = this.navParams.get('isCrypto') || false;
    }

    dismissModal() {
        this.modalController.dismiss();
    }

}
