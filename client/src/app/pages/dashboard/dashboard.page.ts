import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {SubscriptionWebsocketService, UserStorageService} from '@core';
import {TradingScreenUpdateBaseDirective} from '@stock-trading-feature';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage extends TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {

    constructor(public userStorageService: UserStorageService,
                public subscriptionWebsocketService: SubscriptionWebsocketService,
                public cdr: ChangeDetectorRef) {
        super(userStorageService, subscriptionWebsocketService, cdr);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }


}
