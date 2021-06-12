import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolioSnapshot} from '@core';

@Component({
    selector: 'app-dashboard-portfolio-change-charts',
    templateUrl: './dashboard-portfolio-change-charts.component.html',
    styleUrls: ['./dashboard-portfolio-change-charts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPortfolioChangeChartsComponent implements OnInit {
    @Input() stPortfolioSnapshots: StPortfolioSnapshot[];
    @Input() portfolioInvested: number;
    @Input() portfolioCash: number;

    constructor() {
    }

    ngOnInit() {
    }

}
