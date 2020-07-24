import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FinancialReportNames} from '../../../model/stockDetails';

@Component({
    selector: 'app-details-financial-report-names-card',
    templateUrl: './details-financial-report-names-card.component.html',
    styleUrls: ['./details-financial-report-names-card.component.scss'],
})
export class DetailsFinancialReportNamesCardComponent implements OnInit {
    @Output() financialReportEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Input() financialReports: FinancialReportNames[];

    constructor() {
    }

    ngOnInit() {
    }

    clickedFinancialReport(subCollection: string) {
        this.financialReportEmitter.emit(subCollection);
    }

 /*   async showFinancialReport(financialReport: string, ev: any) {
        console.log(ev);
        const popover = await this.popoverController.create({
            component: DetailsFinancialReportModalComponent,
            componentProps: {symbol: 'MSFT', financialReport},
        });
        popover.style.cssText = '--min-width: 70%; --max-width: 70%;';
        return await popover.present();
    }*/

}
