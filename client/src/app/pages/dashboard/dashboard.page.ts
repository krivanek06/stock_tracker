import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionWebsocketService, UserStorageService } from '@core';
import { SymbolIdentification, WindowService } from '@shared';
import { TradingScreenUpdateBaseDirective } from '@stock-trading-feature';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage extends TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {
	transactionHeight: number;

	constructor(
		public userStorageService: UserStorageService,
		public subscriptionWebsocketService: SubscriptionWebsocketService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
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

	async showSummary(symbolIdentification: SymbolIdentification) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, false);
	}
}
