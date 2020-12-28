import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-stock-details-financial',
    templateUrl: './stock-details-financial.component.html',
    styleUrls: ['./stock-details-financial.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsFinancialComponent implements OnInit {
    @Input() stockDetails: QueryStockDetailsQuery;

    constructor() {
    }

    ngOnInit() {

    }

}
