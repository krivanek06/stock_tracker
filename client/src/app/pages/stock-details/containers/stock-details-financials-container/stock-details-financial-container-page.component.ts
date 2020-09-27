import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-stock-details-financial-container',
    templateUrl: './stock-details-financial-container-page.component.html',
    styleUrls: ['./stock-details-financial-container-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsFinancialContainerPage implements OnInit {
    @Input() stockDetails: QueryStockDetailsQuery;

    constructor() {
    }

    ngOnInit() {

    }

}
