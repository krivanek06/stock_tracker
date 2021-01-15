import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StStockDailyInformationsData} from '../../../../api/customGraphql.service';
import {ChartType} from '../../../../shared/models/sharedModel';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';

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
    @Input() suggestion: StStockDailyInformationsData;

    ChartType = ChartType;

    constructor() {
    }

    ngOnInit() {
    }

}
