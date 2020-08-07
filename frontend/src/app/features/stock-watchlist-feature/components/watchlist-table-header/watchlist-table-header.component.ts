import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {ChartDataIdentification, DocumentIdentification} from '../../../../shared/models/chartModel';
import {StockWatchlistInformationFragment} from '../../../../core/services/private/watchlistGraphql.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-watchlist-table-header',
    templateUrl: './watchlist-table-header.component.html',
    styleUrls: ['./watchlist-table-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistTableHeaderComponent implements OnInit {
    editing = false;

    @Input() stockWatchlist: StockWatchlistInformationFragment;

    @Output() deleteWatchlistEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() renameWatchlistEmitter: EventEmitter<DocumentIdentification> = new EventEmitter<DocumentIdentification>();

    constructor() {
    }


    ngOnInit(): void {

    }

    toggleEdit() {
        this.editing = !this.editing;
    }

    deleteWatchlist() {
        this.deleteWatchlistEmitter.emit(this.stockWatchlist.id);
    }

    editWatchlistName(newWatchlistName: string) {
        this.renameWatchlistEmitter.emit({documentId: this.stockWatchlist.id, additionalInfo: newWatchlistName});
    }
}
