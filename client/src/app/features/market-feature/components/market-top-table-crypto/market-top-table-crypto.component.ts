import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';
import {StMarketTopTableCryptoData} from '../../../../api/customGraphql.service';
import {SymbolIdentification} from '../../../../shared/models/sharedModel';

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
