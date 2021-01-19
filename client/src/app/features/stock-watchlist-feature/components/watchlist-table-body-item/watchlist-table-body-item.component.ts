import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
} from '@angular/core';
import {SymbolIdentification} from '../../../../shared/models/sharedModel';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';
import {Summary} from '../../../../api/customGraphql.service';


@Component({
    selector: 'app-watchlist-table-body-item',
    templateUrl: './watchlist-table-body-item.component.html',
    styleUrls: ['./watchlist-table-body-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})

export class WatchlistTableBodyItemComponent implements OnInit {
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    @Input() summary: Summary;
    @Input() currentPrice: number;
    @Input() allowModification: boolean;
    @Input() showDailyChange = true;

    constructor() {
    }

    ngOnInit(): void {
    }

    itemClicked() {
        this.itemClickedEmitter.emit({symbol: this.summary.symbol, name: this.summary.longName});
    }
}
