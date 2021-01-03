import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
} from '@angular/core';
import {STCustomValueChange, SymbolIdentification} from '../../../../shared/models/sharedModel';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';
import {StockSummaryFragmentFragment, Summary} from '../../../../api/customGraphql.service';



@Component({
    selector: 'app-watchlist-table-body-item',
    templateUrl: './watchlist-table-body-item.component.html',
    styleUrls: ['./watchlist-table-body-item.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})

export class WatchlistTableBodyItemComponent implements OnInit, OnChanges {
    // saving values when websocket change current price to trigger animations
    newCurrentPrice = 0;

    @Input() summary: Summary;
    @Input() currentPrice: number;
    @Input() allowModification: boolean;

    @Output() deleteEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    constructor() {
    }

    ngOnInit(): void {
    }


    ngOnChanges(changes: any): void {
        try {
            const change = changes.currentPrice as STCustomValueChange;
            if (!!change?.firstChange) {
                return;
            }
            this.newCurrentPrice = change.currentValue;
        } catch (e) {
            console.log('error in watch table body ', e);
        }

    }


    deleteSymbolClicked() {
        this.deleteEmitter.emit(this.createSymbolIdentification());
    }

    itemClicked() {
        this.itemClickedEmitter.emit(this.createSymbolIdentification());
    }


    private createSymbolIdentification(): SymbolIdentification {
        return {symbol: this.summary.symbol, name: this.summary.longName};
    }
}
