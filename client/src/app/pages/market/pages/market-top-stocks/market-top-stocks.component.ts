import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { componentDestroyed, ComponentScreenUpdateBaseDirective, FinnhubWebsocketService, GraphqlQueryService, StfmCompanyQuote } from '@core';
import { MarketFeatureFacadeService } from '@market-feature';
import { LodashService, SymbolIdentification } from '@shared';
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

	constructor(
		private graphqlQueryService: GraphqlQueryService,
		private finnhubWebsocketService: FinnhubWebsocketService,
		private marketPageFacadeService: MarketFeatureFacadeService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
		public cdr: ChangeDetectorRef
	) {
		super(cdr, 'MarketDailyChangeComponent');
	}

	ngOnInit() {
		super.ngOnInit();
		this.createCopyOfDailyOverview();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		this.finnhubWebsocketService.closeConnection(this.componentName);
	}

	async showSummary(symbolIdentification: SymbolIdentification) {
		if (!!symbolIdentification) {
			await this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, false);
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
