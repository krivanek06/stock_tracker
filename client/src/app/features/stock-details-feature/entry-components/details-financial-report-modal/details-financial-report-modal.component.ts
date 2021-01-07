import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FinancialReport} from '../../model/financialReportModel';
import {ModalController, NavParams} from '@ionic/angular';
import {Observable} from 'rxjs';
import {StockDetailsService} from "../../services/stock-details.service";

@Component({
    selector: 'app-details-financial-report-modal',
    templateUrl: './details-financial-report-modal.component.html',
    styleUrls: ['./details-financial-report-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsFinancialReportModalComponent implements OnInit {
    financialReport$: Observable<FinancialReport>;

    constructor(private modalController: ModalController,
                private stockAPI: StockDetailsService,
                private navParams: NavParams) {
    }

    ngOnInit() {
        const symbol = this.navParams.get('symbol');
        const financialReport = this.navParams.get('financialReport');

        //this.financialReport$ = this.stockAPI.getFinancialReport(symbol, financialReport);
    }

    dismissModal() {
        this.modalController.dismiss();
    }

}
