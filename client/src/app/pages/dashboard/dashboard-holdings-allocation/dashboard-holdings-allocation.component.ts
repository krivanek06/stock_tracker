import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StTransaction} from '@core';

@Component({
    selector: 'app-dashboard-holdings-allocation',
    templateUrl: './dashboard-holdings-allocation.component.html',
    styleUrls: ['./dashboard-holdings-allocation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHoldingsAllocationComponent implements OnInit {
    @Input() stTransactions: StTransaction[] = [];
    @Input() portfolioCash: number;
    @Input() portfolioInvested: number;

    constructor() {
    }

    ngOnInit() {
    }

}
