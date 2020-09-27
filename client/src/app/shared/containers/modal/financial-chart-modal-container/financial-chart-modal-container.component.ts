import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ChartDataIdentification} from '../../../models/sharedModel';
import {Router} from '@angular/router';

@Component({
    selector: 'app-financial-chart-modal-container',
    templateUrl: './financial-chart-modal-container.component.html',
    styleUrls: ['./financial-chart-modal-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialChartModalContainerComponent implements OnInit {
    chartDataIdentification: ChartDataIdentification;

    constructor(private navParams: NavParams,
                private router: Router,
                private modalController: ModalController) {
        this.chartDataIdentification = this.navParams.get('chartDataIdentification');
    }

    ngOnInit() {
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    redirectToDetails() {
        this.dismissModal();
        this.router.navigate([`/menu/stock-details/${this.chartDataIdentification.symbol}`]);
    }

}
