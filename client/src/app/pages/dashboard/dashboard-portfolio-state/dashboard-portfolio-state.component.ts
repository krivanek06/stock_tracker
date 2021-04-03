import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard-portfolio-state',
    templateUrl: './dashboard-portfolio-state.component.html',
    styleUrls: ['./dashboard-portfolio-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPortfolioStateComponent implements OnInit {
    @Input() portfolioCash: number;
    @Input() portfolioInvested: number;

    constructor() {
    }

    ngOnInit() {
    }

}
