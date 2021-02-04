import {Component, Input, OnInit} from '@angular/core';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';
import {StMarketTopTableCryptoData} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-market-top-table-crypto',
    templateUrl: './market-top-table-crypto.component.html',
    styleUrls: ['./market-top-table-crypto.component.scss'],
    animations: [
        marketValueChange
    ]
})
export class MarketTopTableCryptoComponent implements OnInit {
    @Input() topTableCryptoData: StMarketTopTableCryptoData[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
