import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ChartType} from '../../../../shared/models/sharedModel';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';
import {StStockSuggestion} from '../../../../api/customGraphql.service';

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
