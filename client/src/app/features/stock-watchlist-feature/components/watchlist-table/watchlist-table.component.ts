import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StStockWatchlist, StStockWatchlistFragmentFragment} from '../../../../api/customGraphql.service';
import {SymbolIdentification} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-watchlist-table',
    templateUrl: './watchlist-table.component.html',
    styleUrls: ['./watchlist-table.component.scss'],
})
export class WatchlistTableComponent implements OnInit {
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    @Input() watchlist: StStockWatchlist;
    @Input() allowModification = true;

    showDailyChange = true;

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(identification: SymbolIdentification) {
        this.itemClickedEmitter.emit(identification);
    }

    toggleDailyChange() {
        this.showDailyChange = !this.showDailyChange;
    }
}
