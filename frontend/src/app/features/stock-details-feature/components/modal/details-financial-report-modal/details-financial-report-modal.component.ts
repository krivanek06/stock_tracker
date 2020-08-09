import {Component, OnInit} from '@angular/core';
import {FinancialReport} from '../../../model/financialReportModel';
import {ModalController, NavParams, PopoverController} from '@ionic/angular';
import {StockApiService} from '../../../../../api/stock-api.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-details-financial-report-modal',
    templateUrl: './details-financial-report-modal.component.html',
    styleUrls: ['./details-financial-report-modal.component.scss'],
})
export class DetailsFinancialReportModalComponent implements OnInit {
    financialReport$: Observable<FinancialReport>;

    constructor(private modalController: ModalController,
                private stockAPI: StockApiService,
                private navParams: NavParams) {
    }

    ngOnInit() {
        const symbol = this.navParams.get('symbol');
        const financialReport = this.navParams.get('financialReport');

        this.financialReport$ = this.stockAPI.getFinancialReport(symbol, financialReport);
    }

    dismissModal() {
        this.modalController.dismiss();
    }

}
