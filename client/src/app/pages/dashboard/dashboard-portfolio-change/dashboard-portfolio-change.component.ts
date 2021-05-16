import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolioChange} from '@core';
import {TradingChangeModel} from '@stock-trading-feature';

@Component({
    selector: 'app-dashboard-portfolio-change',
    templateUrl: './dashboard-portfolio-change.component.html',
    styleUrls: ['./dashboard-portfolio-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPortfolioChangeComponent implements OnInit {
    @Input() stPortfolioChanges: StPortfolioChange[];
    @Input() portfolioCash: number;
    @Input() portfolioInvested: number;
    @Input() daily: TradingChangeModel;

    constructor() {
    }

    ngOnInit() {
    }

}
