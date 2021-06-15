import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {PortfolioHistoricalWrapper} from '../../../models';
import {marketValueChange} from '@shared';


@Component({
    selector: 'app-portfolio-change',
    templateUrl: './portfolio-change.component.html',
    styleUrls: ['./portfolio-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class PortfolioChangeComponent implements OnInit {
    @Input() balance: number;
    @Input() tradingChangeWrapper: PortfolioHistoricalWrapper;

    constructor() {
    }

    ngOnInit() {
    }

}
