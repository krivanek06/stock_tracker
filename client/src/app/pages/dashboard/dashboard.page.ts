import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionWebsocketService, UserStorageService } from '@core';
import { WindowService } from '@shared';
import { PortfolioChangeItemsToDisplay, TradingScreenUpdateBaseDirective } from '@stock-trading-feature';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage extends TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {
	transactionHeight!: number;
	PortfolioChangeItemsToDisplay = PortfolioChangeItemsToDisplay;

	constructor(
		public userStorageService: UserStorageService,
		public subscriptionWebsocketService: SubscriptionWebsocketService,
		public cdr: ChangeDetectorRef
	) {
		super(userStorageService, subscriptionWebsocketService, cdr);
	}

	ngOnInit(): void {
		super.ngOnInit();
		this.transactionHeight = WindowService.getWindowHeightPrctInPx(45);
	}

	ngOnDestroy(): void {
		super.ngOnDestroy();
	}
}
