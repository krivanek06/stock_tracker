import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery, StockDetails} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-details-financial-strength',
    templateUrl: './details-financial-strength.component.html',
    styleUrls: ['./details-financial-strength.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsFinancialStrengthComponent implements OnInit {
    @Input() stockDetails: StockDetails;

    constructor() {
    }

    ngOnInit() {
    }

}
