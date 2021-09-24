import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {
	componentDestroyed,
	FinnhubWebsocketService,
	StStockWatchlistFragmentFragment,
	SubscriptionWebsocketService,
	UserStorageService,
} from '@core';
import { ComponentScreenUpdateBaseDirective, LodashService, SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-watchlist',
	templateUrl: './watchlist.page.html',
	styleUrls: ['./watchlist.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistPage extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
	stockWatchlists: StStockWatchlistFragmentFragment[] = [];

	constructor(
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
		private userStorageService: UserStorageService,
		private subscriptionWebsocketService: SubscriptionWebsocketService,
		public finnhubWebsocket: FinnhubWebsocketService,
		public cdr: ChangeDetectorRef
	) {
		super(cdr, finnhubWebsocket, 'WatchlistPage');
	}

	ngOnInit() {
		super.ngOnInit();
		this.subscribeForWatchlistChange();
		this.subscribeForSymbolPriceChange();
	}

	ngOnDestroy(): void {
		super.ngOnDestroy();
	}

	createWatchlist() {
		this.watchlistFeatureFacadeService.createWatchlist();
	}

	async showChartForSymbol(symbolIdentification: SymbolIdentification, watchlistId: string) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, true, watchlistId);
	}

	private subscribeForWatchlistChange() {
		this.userStorageService
			.getUserWatchlists()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((watchlists) => {
				this.stockWatchlists = LodashService.cloneDeep(watchlists) || [];
			});
	}

	private subscribeForSymbolPriceChange() {
		this.subscriptionWebsocketService
			.initSubscriptionWatchlist()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				for (const watchlist of this.stockWatchlists) {
					const objIndex = watchlist.summaries.findIndex((obj) => obj.symbol === res.s);

					if (objIndex !== -1) {
						watchlist.summaries[objIndex].marketPrice = res.p;
					}
				}
			});
	}
}
