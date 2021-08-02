import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmBalanceSheet, StfmCashFlow, StfmIncomeStatement} from '@core';

@Component({
    selector: 'app-details-statement-sheet',
    templateUrl: './details-statement-sheet.component.html',
    styleUrls: ['./details-statement-sheet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsStatementSheetComponent implements OnInit {
    @Input() sheetTitle: string;
    @Input() sheets: StfmBalanceSheet[] | StfmIncomeStatement[] | StfmCashFlow[] = [];

    sliderConfig = {
        spaceBetween: 12,
        centeredSlides: true,
        slidesPerView: 1.15
    };

    constructor() {
    }

    ngOnInit() {
    }

}
