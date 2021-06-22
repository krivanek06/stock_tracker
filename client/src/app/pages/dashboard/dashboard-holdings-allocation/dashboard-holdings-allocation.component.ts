import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StHolding, StTransaction} from '@core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {BreakpointState} from '@angular/cdk/layout/breakpoints-observer';
import {BREAK_POINTS} from '@shared';

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

    breakpointSmDown$: Observable<BreakpointState>;

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    ngOnInit() {
        this.breakpointSmDown$ = this.breakpointObserver.observe([BREAK_POINTS.SM_DOWN]);
    }

}
