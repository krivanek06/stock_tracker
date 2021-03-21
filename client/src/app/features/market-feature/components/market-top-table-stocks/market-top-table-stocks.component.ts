import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marketValueChange, SymbolIdentification} from '@shared';
import {StMarketTopTableSymbolData} from '@core';

@Component({
    selector: 'app-market-top-table-stocks',
    templateUrl: './market-top-table-stocks.component.html',
    styleUrls: ['./market-top-table-stocks.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class MarketTopTableStocksComponent implements OnInit {
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    @Input() topTableSymbolData: StMarketTopTableSymbolData[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(symbol: string, name: string) {
        this.itemClickedEmitter.emit({symbol, name});
    }

}
