import { ChangeDetectorRef, Directive, OnDestroy, OnInit, ViewRef } from '@angular/core';
import { componentDestroyed, StHolding, StUserPublicData, SubscriptionWebsocketService, Summary, UserStorageService } from '@core';
import { LodashService } from '@shared';
import { filter, takeUntil } from 'rxjs/operators';

@Directive()
export abstract class TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {
	user: StUserPublicData;
	selectedSummary: Summary;

	clonedHoldings: StHolding[] = [];
	portfolioInvested: number;

	private interval: any;

	protected constructor(
		public userStorageService: UserStorageService,
		public subscriptionWebsocketService: SubscriptionWebsocketService,
		public cdr: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.initComponentAttributes();
		this.subscribeForSymbolPriceChange();
		this.updateScreen();
	}

	ngOnDestroy() {
		this.subscriptionWebsocketService.closeSubscriptionHoldings();
		clearInterval(this.interval);
	}

	/**
	 * All containers which will extend TradingScreenUpdateBase needs these attributes
	 */
	private initComponentAttributes() {
		this.userStorageService
			.getUser()
			.pipe(
				filter((x) => !!x),
				takeUntil(componentDestroyed(this))
			)
			.subscribe((user) => {
				this.clonedHoldings = LodashService.cloneDeep(user.holdings);
				this.calculateTotalPortfolio();

				this.user = user;

				// select first summary in holdings
				if (!this.selectedSummary) {
					this.selectedSummary = user.holdings.length > 0 ? LodashService.cloneDeep(user.holdings[0].summary) : undefined;
				}
			});
	}

	/**
	 * Init subscription for symbols which are in holdings
	 */
	private subscribeForSymbolPriceChange() {
		this.subscriptionWebsocketService
			.initSubscriptionHoldings()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				const transaction = this.clonedHoldings.find((s) => s.symbol === res.s);
				if (transaction) {
					transaction.summary.marketPrice = res.p;
				}
			});
	}

	// websockets update view
	private updateScreen(): void {
		this.interval = setInterval(() => {
			if (this.cdr && !(this.cdr as ViewRef).destroyed) {
				this.calculateTotalPortfolio();
				//this.calculateDailyPortfolioChange();
				this.cdr.detectChanges();
			}
		}, 2000);
	}

	private calculateTotalPortfolio() {
		this.portfolioInvested = this.clonedHoldings.map((h) => h.summary.marketPrice * h.units).reduce((a, b) => a + b, 0);
	}
}
