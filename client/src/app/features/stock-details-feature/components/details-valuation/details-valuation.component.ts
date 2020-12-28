import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery, StockDetails} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-details-valuation',
    templateUrl: './details-valuation.component.html',
    styleUrls: ['./details-valuation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsValuationComponent implements OnInit {
    @Input() stockDetails: StockDetails;

    constructor() {
    }

    ngOnInit() {
    }

}
