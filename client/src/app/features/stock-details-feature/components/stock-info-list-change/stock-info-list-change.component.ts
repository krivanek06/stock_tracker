import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StStockDailyInformationsData} from '../../../../api/customGraphql.service';
import {ChartType} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-stock-info-list-change',
    templateUrl: './stock-info-list-change.component.html',
    styleUrls: ['./stock-info-list-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockInfoListChangeComponent implements OnInit {
    @Input() suggestion: StStockDailyInformationsData;

    ChartType = ChartType;

    constructor() {
    }

    ngOnInit() {
    }

}
