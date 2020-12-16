import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DocumentIdentification} from '../../../../shared/models/sharedModel';
import {StStockWatchlistFragmentFragment} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-watchlist-table-title',
    templateUrl: './watchlist-table-title.component.html',
    styleUrls: ['./watchlist-table-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistTableTitleComponent implements OnInit {
    @Input() stockWatchlist: StStockWatchlistFragmentFragment;

    @Output() deleteWatchlistEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() renameWatchlistEmitter: EventEmitter<DocumentIdentification> = new EventEmitter<DocumentIdentification>();

    editing = false;

    constructor() {
    }

    ngOnInit() {
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
