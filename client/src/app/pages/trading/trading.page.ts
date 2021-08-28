import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {
	componentDestroyed,
	GraphqlQueryService,
	StfmCompanyQuote,
	StStockSuggestion,
	SubscriptionWebsocketService,
	Summary,
	SymbolStorageService,
	UserStorageService,
} from '@core';
import { LodashService, SymbolIdentification } from '@shared';
import { TradingFeatureFacadeService, TradingScreenUpdateBaseDirective } from '@stock-trading-feature';
import { first, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-trading',
	templateUrl: './trading.page.html',
	styleUrls: ['./trading.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingPage extends TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {
	suggestions: StStockSuggestion[] = [];

	constructor(
		private symbolStorageService: SymbolStorageService,
		public subscriptionWebsocketService: SubscriptionWebsocketService,
		private graphqlQueryService: GraphqlQueryService,
		public userStorageService: UserStorageService,
		public tradingService: TradingFeatureFacadeService,
		public cdr: ChangeDetectorRef
	) {
		super(userStorageService, subscriptionWebsocketService, cdr);
	}

	ngOnInit() {
		super.ngOnInit();
		this.initSuggestions();
		this.subscribeForSuggestionPriceChange();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	changeSymbol(symbolIdentification: SymbolIdentification) {
		this.symbolStorageService
			.getStockSummary(symbolIdentification.symbol)
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				this.selectedSummary = res;
			});
	}

	changeSummary(summary: Summary) {
		this.selectedSummary = summary;
	}

	loadSummary(companyQuote: StfmCompanyQuote) {
		this.symbolStorageService
			.getStockSummary(companyQuote.symbol)
			.pipe(first())
			.subscribe((summary) => {
				console.log('summary', summary);
				this.selectedSummary = summary;
			});
	}

	async tradeSymbol() {
		await this.tradingService.performTransaction(this.selectedSummary);
	}

	private initSuggestions() {
		this.graphqlQueryService
			.queryMarketDailyOverview()
			.pipe(first())
			.subscribe((overview) => {
				this.suggestions = LodashService.cloneDeep(overview.stockSuggestions);

				if (!this.selectedSummary) {
					this.selectedSummary = this.suggestions[0].summary;
				}
			});
	}

	private subscribeForSuggestionPriceChange() {
		this.subscriptionWebsocketService
			.initSubscriptionStockSuggestions()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				const suggestion = this.suggestions.find((s) => s.summary.symbol === res.s);
				if (suggestion) {
					suggestion.summary.marketPrice = res.p;
				}
			});
	}
}
