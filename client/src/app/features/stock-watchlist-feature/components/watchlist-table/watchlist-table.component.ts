import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Maybe from 'graphql/tsutils/Maybe';
import {StStockWatchlistFragmentFragment} from '../../../../api/customGraphql.service';
import {ChartDataIdentification} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-watchlist-table',
    templateUrl: './watchlist-table.component.html',
    styleUrls: ['./watchlist-table.component.scss'],
})
export class WatchlistTableComponent implements OnInit {
    @Output() deleteEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() itemClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();

    @Input() watchlist: Maybe<{ __typename?: 'STStockWatchlist' } & StStockWatchlistFragmentFragment>;

    constructor() {
    }

    ngOnInit() {
    }

    deleteSymbolFromWatchlist(identification: ChartDataIdentification) {
        this.deleteEmitter.emit(identification);
    }

    itemClicked(identification: ChartDataIdentification) {
        this.itemClickedEmitter.emit(identification);
    }
}
