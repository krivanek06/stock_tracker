import {Component, Input, OnInit} from '@angular/core';
import {BasicInfo, OverView} from '../../../model/stockDetails';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-details-summary-modal',
    templateUrl: './details-summary-modal.component.html',
    styleUrls: ['./details-summary-modal.component.scss'],
})
export class DetailsSummaryModalComponent implements OnInit {
    basicInfo: BasicInfo;

    constructor(private modalController: ModalController,
                private navParams: NavParams) {
        this.basicInfo = this.navParams.get('basicInfo');
        console.log('pop up', this.basicInfo);
    }

    ngOnInit() {
    }

    dismissModal() {
        this.modalController.dismiss();
    }

}
