import {Component, Input, OnInit} from '@angular/core';
import {OverView} from '../../../model/stockDetails';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-details-summary-modal',
    templateUrl: './details-summary-modal.component.html',
    styleUrls: ['./details-summary-modal.component.scss'],
})
export class DetailsSummaryModalComponent implements OnInit {
    overView: OverView;

    constructor(private popoverController: PopoverController,
                private navParams: NavParams) {
        this.overView = this.navParams.get('overView');
        console.log('pop up', this.overView);
    }

    ngOnInit() {
    }

    dismissModal() {
        this.popoverController.dismiss();
    }

}
