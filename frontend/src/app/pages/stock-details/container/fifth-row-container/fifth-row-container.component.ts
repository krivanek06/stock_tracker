import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-tracker/model/stockDetails';
import {PopoverController} from '@ionic/angular';
import {DetailsFinancialReportModalComponent} from '../../../../features/stock-tracker/components/modal/details-financial-report-modal/details-financial-report-modal.component';
import {StockApiService} from '../../../../features/stock-tracker/endpoints/stock-api.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-fifth-row-container',
    templateUrl: './fifth-row-container.component.html',
    styleUrls: ['./fifth-row-container.component.scss'],
})
export class FifthRowContainerComponent implements OnInit {
    @Input() stockDetails: StockDetails;

    constructor(private popoverController: PopoverController) {
    }

    ngOnInit() {
    }

    async showFinancialReport(financialReport: string) {
        const popover = await this.popoverController.create({
            component: DetailsFinancialReportModalComponent,
            componentProps: {symbol: this.stockDetails.basicInfo.symbol, financialReport},
            translucent: true
        });
        popover.style.cssText = '--min-width: 65%; --max-width: 65%;';
        return await popover.present();
    }

}
