import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marketValueChange} from '@shared';
import {StMarketTopTableCryptoData} from '@core';

@Component({
    selector: 'app-market-top-table-crypto',
    templateUrl: './market-top-table-crypto.component.html',
    styleUrls: ['./market-top-table-crypto.component.scss'],
    animations: [
        marketValueChange
    ]
})
export class MarketTopTableCryptoComponent implements OnInit {
    @Output() itemClickedEmitter: EventEmitter<StMarketTopTableCryptoData> = new EventEmitter<StMarketTopTableCryptoData>();
    @Input() topTableCryptoData: StMarketTopTableCryptoData[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(data: StMarketTopTableCryptoData) {
        this.itemClickedEmitter.emit(data);
    }


}
