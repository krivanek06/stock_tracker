import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StStockWatchlist, StStockWatchlistFragmentFragment, Summary} from '../../../../api/customGraphql.service';
import {SymbolIdentification} from '../../../../shared/models/sharedModel';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';

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
