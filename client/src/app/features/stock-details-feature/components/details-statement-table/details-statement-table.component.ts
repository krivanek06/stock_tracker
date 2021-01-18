import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-details-statement-table',
    templateUrl: './details-statement-table.component.html',
    styleUrls: ['./details-statement-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsStatementTableComponent implements OnInit {
    /**
     * Example
     * "accruedExpenses": {
                "change": [
                    4.89,
                    31.56,
                    66.41,
                    null
                ],
                "data": [
                    157778000,
                    150422000,
                    114337000,
                    68706000
                ],
                "name": "Accrued expenses"
            },
     */
    @Input() statement: any;
    @Input() title: string;
    @Input() isQuarterlyData = true;

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
