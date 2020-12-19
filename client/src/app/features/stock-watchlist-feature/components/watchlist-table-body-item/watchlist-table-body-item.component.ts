import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnInit,
    Output,
} from '@angular/core';
import {ChartDataIdentification} from '../../../../shared/models/sharedModel';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';
import {StockSummaryFragmentFragment, Summary} from '../../../../api/customGraphql.service';


interface CustomValueChange {
    firstChange: boolean;
    currentValue: number;
    previousValue: number;
}

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

    @Input() summary: StockSummaryFragmentFragment;
    @Input() currentPrice: number;

    @Output() deleteEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() itemClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();

    constructor() {
    }

    ngOnInit(): void {
    }


    ngOnChanges(changes: any): void {
        try {
            const change = changes.currentPrice as CustomValueChange;
            if (!!change?.firstChange) {
                return;
            }
            this.newCurrentPrice = change.currentValue;
        } catch (e) {
            console.log('error in watch table body ', e);
        }

    }


    deleteSymbolClicked() {
        this.deleteEmitter.emit(this.createChartDataIdentification());
    }

    itemClicked() {
        this.itemClickedEmitter.emit(this.createChartDataIdentification());
    }


    private createChartDataIdentification(): ChartDataIdentification {
        return {symbol: this.summary.symbol, name: this.summary.longName};
    }
}
