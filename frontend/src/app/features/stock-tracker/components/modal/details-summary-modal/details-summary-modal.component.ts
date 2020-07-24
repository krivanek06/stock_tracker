import {Component, Input, OnInit} from '@angular/core';
import {BasicInfo, OverView} from '../../../model/stockDetails';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-details-summary-modal',
    templateUrl: './details-summary-modal.component.html',
    styleUrls: ['./details-summary-modal.component.scss'],
})
export class DetailsSummaryModalComponent implements OnInit {
    basicInfo: BasicInfo;

    constructor(private popoverController: PopoverController,
                private navParams: NavParams) {
        this.basicInfo = this.navParams.get('basicInfo');
        console.log('pop up', this.basicInfo);
    }

    ngOnInit() {
    }

    dismissModal() {
        this.popoverController.dismiss();
    }

}
