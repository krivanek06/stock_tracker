import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StStockWatchlist, StStockWatchlistFragmentFragment} from '../../../../api/customGraphql.service';
import {SymbolIdentification} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-watchlist-table',
    templateUrl: './watchlist-table.component.html',
    styleUrls: ['./watchlist-table.component.scss'],
})
export class WatchlistTableComponent implements OnInit {
    @Output() deleteEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    @Input() watchlist: StStockWatchlist;
    @Input() allowModification = true;

    constructor() {
    }

    ngOnInit() {
    }

    deleteSymbolFromWatchlist(identification: SymbolIdentification) {
        this.deleteEmitter.emit(identification);
    }

    itemClicked(identification: SymbolIdentification) {
        this.itemClickedEmitter.emit(identification);
    }
}
