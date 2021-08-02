import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmInsideTrade} from '@core';

@Component({
    selector: 'app-details-transactions',
    templateUrl: './details-transactions.component.html',
    styleUrls: ['./details-transactions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsTransactionsComponent implements OnInit {
    @Input() insiderTrades: StfmInsideTrade[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
