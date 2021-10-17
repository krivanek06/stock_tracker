import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { componentDestroyed, FinnhubWebsocketService, GraphqlQueryService, StfmCompanyQuote } from '@core';
import { ComponentScreenUpdateBaseDirective, LodashService, SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { first, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-market-top-stocks',
	templateUrl: './market-top-stocks.component.html',
	styleUrls: ['./market-top-stocks.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketTopStocksComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
	topGainers: StfmCompanyQuote[] = [];
	topLosers: StfmCompanyQuote[] = [];
	mostActive: StfmCompanyQuote[] = [];
	lastUpdateTopStocks: string;

	constructor(
		private graphqlQueryService: GraphqlQueryService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
		public finnhubWebsocketService: FinnhubWebsocketService,
		public cdr: ChangeDetectorRef
	) {
		super(cdr, finnhubWebsocketService, 'MarketDailyChangeComponent');
	}

	ngOnInit() {
		super.ngOnInit();
		this.createCopyOfDailyOverview();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	async showSummary(symbolIdentification: SymbolIdentification) {
		if (!!symbolIdentification) {
			await this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, true);
		}
	}

	private createCopyOfDailyOverview() {
		this.graphqlQueryService
			.queryMarketDailyOverview()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				this.topGainers = LodashService.cloneDeep(res.dailyGainers);
				this.topLosers = LodashService.cloneDeep(res.dailyLosers);
				this.mostActive = LodashService.cloneDeep(res.mostActive);
				this.lastUpdateTopStocks = res.lastUpdateTopStocks;

				// init subscription only if service is initialized
				this.finnhubWebsocketService
					.isConnectionInitializedObs()
					.pipe(first((res) => res))
					.subscribe(() => this.initSubscriptionForDailyOverview());
			});
	}

	private initSubscriptionForDailyOverview() {
		this.topGainers.forEach((data) => this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, data.symbol));
		this.topLosers.forEach((data) => this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, data.symbol));
		this.mostActive.forEach((data) => this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, data.symbol));

		this.finnhubWebsocketService
			.getSubscribedSymbolsResult()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				[...this.topGainers, ...this.topLosers, ...this.mostActive]
					.filter((companyQuote) => companyQuote.symbol === res.s)
					.forEach((companyQuote) => (companyQuote.price = res.p));
			});
	}
}
