import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ChartType, marketValueChange} from '@shared';
import {StStockSuggestion} from '@core';

@Component({
    selector: 'app-stock-info-list-change',
    templateUrl: './stock-info-list-change.component.html',
    styleUrls: ['./stock-info-list-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class StockInfoListChangeComponent implements OnInit {
    @Input() suggestionMarketPrice: number;
    @Input() suggestion: StStockSuggestion;

    ChartType = ChartType;

    constructor() {
    }

    ngOnInit() {
    }

}
