import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StStockWatchlist, Summary} from '@core';
import {marketValueChange, SymbolIdentification} from '@shared';

@Component({
    selector: 'app-watchlist-table',
    templateUrl: './watchlist-table.component.html',
    styleUrls: ['./watchlist-table.component.scss'],
    animations: [
        marketValueChange
    ]
})
export class WatchlistTableComponent implements OnInit {
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    @Input() watchlist: StStockWatchlist;

    showDailyChange = true;

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(identification: Summary) {
        this.itemClickedEmitter.emit({symbol: identification.symbol, name: identification.shortName});
    }

    toggleDailyChange() {
        this.showDailyChange = !this.showDailyChange;
    }
}
