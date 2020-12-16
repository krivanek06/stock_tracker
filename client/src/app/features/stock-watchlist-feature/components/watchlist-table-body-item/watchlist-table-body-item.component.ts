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
    private isMobile = false;

    // saving values when websocket change current price to trigger animations
    newCurrentPrice = 0;

    @Input() summary: StockSummaryFragmentFragment;
    @Input() currentPrice: number;

    @Output() deleteSymbolClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() detailsButtonClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() imageClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() detailsItemClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();

    constructor() {
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

    ngOnInit() {
        this.isMobile = window.innerWidth <= 400;
    }


    deleteSymbolClicked() {
        this.deleteSymbolClickedEmitter.emit(this.createChartDataIdentification());
    }

    detailsButtonClicked() {
        this.detailsButtonClickedEmitter.emit(this.createChartDataIdentification());
    }

    imageClicked() {
        this.imageClickedEmitter.emit(this.createChartDataIdentification());
    }

    detailsItemClicked() {
        console.log(this.isMobile);
        if (!this.isMobile) {
            return;
        }

        // this.detailsItemClickedEmitter.emit(this.createChartDataIdentification());
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.isMobile = event.target.innerWidth <= 400;
    }

    private createChartDataIdentification(): ChartDataIdentification {
        return {symbol: this.summary.symbol, name: this.summary.longName};
    }
}
