import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChartDataIdentification, DocumentIdentification} from '../../../../shared/models/chartModel';
import {
    StockWatchlistInformationFragment
} from '../../../../core/services/private/watchlistGraphql.service';

@Component({
    selector: 'app-watchlist-table',
    templateUrl: './watchlist-table.component.html',
    styleUrls: ['./watchlist-table.component.scss']
})
export class WatchlistTableComponent implements OnInit {
    editing = false;

    @Input() stockWatchlist: StockWatchlistInformationFragment;

    @Output() showChartEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() showDetailsEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() deleteSymbolEmitter: EventEmitter<DocumentIdentification> = new EventEmitter<DocumentIdentification>();
    @Output() deleteWatchlistEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() renameWatchlistEmitter: EventEmitter<DocumentIdentification> = new EventEmitter<DocumentIdentification>();

    constructor() {
    }

    ngOnInit(): void {
    }


    toggleEdit() {
        this.editing = !this.editing;
    }

    showChart(name: string, symbol: string) {
        this.showChartEmitter.emit({name, symbol});
    }


    detailsClicked(symbol: string) {
        this.showDetailsEmitter.emit(symbol);
    }

    deleteSymbolFromWatchlist(symbol: string) {
        this.deleteSymbolEmitter.emit({documentId: this.stockWatchlist.id, additionalInfo: symbol});
    }

    deleteWatchlist(){
        this.deleteWatchlistEmitter.emit( this.stockWatchlist.id);
    }

    editWatchlistName(newWatchlistName: string) {
        this.renameWatchlistEmitter.emit({documentId: this.stockWatchlist.id, additionalInfo: newWatchlistName});
    }
}
