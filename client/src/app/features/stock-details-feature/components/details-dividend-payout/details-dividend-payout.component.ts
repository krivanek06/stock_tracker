import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmStockDividend} from '@core';

@Component({
    selector: 'app-details-dividend-payout',
    templateUrl: './details-dividend-payout.component.html',
    styleUrls: ['./details-dividend-payout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsDividendPayoutComponent implements OnInit {
    @Input() dividendPayouts: StfmStockDividend[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
