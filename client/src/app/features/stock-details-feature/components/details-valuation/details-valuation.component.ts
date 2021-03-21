import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '@core';

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
