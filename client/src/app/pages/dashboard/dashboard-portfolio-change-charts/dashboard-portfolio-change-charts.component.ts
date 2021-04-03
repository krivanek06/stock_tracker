import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolioChange} from '@core';

@Component({
    selector: 'app-dashboard-portfolio-change-charts',
    templateUrl: './dashboard-portfolio-change-charts.component.html',
    styleUrls: ['./dashboard-portfolio-change-charts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPortfolioChangeChartsComponent implements OnInit {
    @Input() stPortfolio: StPortfolioChange[];
    @Input() stPortfolioChanges: StPortfolioChange[];

    constructor() {
    }

    ngOnInit() {
    }

}
