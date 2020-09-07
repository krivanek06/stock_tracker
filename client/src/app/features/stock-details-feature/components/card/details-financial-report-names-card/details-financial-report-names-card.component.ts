import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FinancialReportNames} from '../../../model/stockDetails';

@Component({
    selector: 'app-details-financial-report-names-card',
    templateUrl: './details-financial-report-names-card.component.html',
    styleUrls: ['./details-financial-report-names-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsFinancialReportNamesCardComponent implements OnInit {
    @Output() financialReportEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() financialReports: FinancialReportNames[];

    constructor() {
    }

    ngOnInit() {
    }

    clickedFinancialReport(subCollection: string) {
        this.financialReportEmitter.emit(subCollection);
    }
}
