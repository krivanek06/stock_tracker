import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StHolding, StTransaction} from '@core';

@Component({
    selector: 'app-dashboard-holdings-allocation',
    templateUrl: './dashboard-holdings-allocation.component.html',
    styleUrls: ['./dashboard-holdings-allocation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHoldingsAllocationComponent implements OnInit {
    @Input() holdings: StHolding[] = [];
    @Input() portfolioCash: number;
    @Input() portfolioInvested: number;

    constructor() {
    }

    ngOnInit() {
    }

}
