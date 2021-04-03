import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolioChange, StTransaction} from '@core';

@Component({
    selector: 'app-dashboard-transactions',
    templateUrl: './dashboard-transactions.component.html',
    styleUrls: ['./dashboard-transactions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTransactionsComponent implements OnInit {
    @Input() stPortfolioChanges: StPortfolioChange[];
    @Input() transactions: StTransaction[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
