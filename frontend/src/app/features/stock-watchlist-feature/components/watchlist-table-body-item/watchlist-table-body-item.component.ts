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
import {ChartDataIdentification} from '../../../../shared/models/chartModel';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {marketValueChange} from '../../../../shared/animation/marketValueChange.animation';


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

    // saving values when websocket change current price to trigger animation
    previousCurrentPrice = 0;
    newCurrentPrice = 0;

    @Input() symbol: string;
    @Input() shortName: string;
    @Input() currentPrice: number;
    @Input() previousClose: number;
    @Input() logoUrl: string;
    @Input() weekLow52: number;
    @Input() weekHigh52: number;
    @Input() earningsDate: string;

    @Output() deleteSymbolClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() detailsButtonClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() imageClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() detailsItemClickedEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();

    constructor() {
    }


    ngOnChanges(changes: any): void {
        const currentPrice = changes.currentPrice as CustomValueChange;
        if (!!currentPrice?.firstChange) {
            return;
        }
        this.previousCurrentPrice = currentPrice.previousValue;
        this.newCurrentPrice = currentPrice.currentValue;

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

        this.detailsItemClickedEmitter.emit(this.createChartDataIdentification());
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.isMobile = event.target.innerWidth <= 400;
    }

    private createChartDataIdentification(): ChartDataIdentification {
        return {symbol: this.symbol, name: this.shortName};
    }
}
