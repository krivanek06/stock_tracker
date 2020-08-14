import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';
import {ModalController, PopoverController} from '@ionic/angular';
import {DetailsFinancialReportModalComponent} from '../../../../features/stock-details-feature/components/modal/details-financial-report-modal/details-financial-report-modal.component';
import {StockFundamentalsApiService} from '../../../../api/stock-fundamentals-api.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-fifth-row-container',
    templateUrl: './fifth-row-container.component.html',
    styleUrls: ['./fifth-row-container.component.scss'],
})
export class FifthRowContainerComponent implements OnInit {
    @Input() stockDetails: StockDetails;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    async showFinancialReport(financialReport: string) {
        const modal = await this.modalController.create({
            component: DetailsFinancialReportModalComponent,
            componentProps: {symbol: this.stockDetails.basicInfo.symbol, financialReport},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

}
