import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	componentDestroyed,
	GraphqlQueryService,
	StfmCompanyQuote,
	StStockSuggestion,
	SubscriptionWebsocketService,
	Summary,
	SymbolStorageService,
	SymbolType,
	UserStorageService,
} from '@core';
import { ChartType, LodashService, SymbolIdentification } from '@shared';
import { TradingFeatureFacadeService, TradingScreenUpdateBaseDirective } from '@stock-trading-feature';
import { first, takeUntil } from 'rxjs/operators';
import { DialogService } from './../../shared/services/dialog.service';

@Component({
	selector: 'app-trading',
	templateUrl: './trading.page.html',
	styleUrls: ['./trading.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingPage extends TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {
	suggestions: StStockSuggestion[] = [];

	ChartType = ChartType;
	SymbolType = SymbolType;

	constructor(
		private symbolStorageService: SymbolStorageService,
		public subscriptionWebsocketService: SubscriptionWebsocketService,
		private graphqlQueryService: GraphqlQueryService,
		public userStorageService: UserStorageService,
		public tradingService: TradingFeatureFacadeService,
		public cdr: ChangeDetectorRef,
		private scroll: ViewportScroller,
		private router: Router
	) {
		super(userStorageService, subscriptionWebsocketService, cdr);
	}

	get isStock(): boolean {
		return this.selectedSummary?.symbolType === SymbolType.Stock || this.selectedSummary?.symbolType === SymbolType.Adr;
	}

	ngOnInit() {
		super.ngOnInit();
		this.initSuggestions();
		this.subscribeForSuggestionPriceChange();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	showDetails() {
		this.router.navigateByUrl(`/menu/search/stock-details/${this.selectedSummary.symbol}`);
	}

	changeSymbol(symbolIdentification: SymbolIdentification) {
		this.selectedSummary = null;
		this.symbolStorageService
			.getStockSummary(symbolIdentification.symbol)
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				this.setSelectedSummary(res);
				this.scrollTop();
			});
	}

	changeSummary(summary: Summary) {
		this.setSelectedSummary(summary);
		this.scrollTop();
	}

	loadSummary(companyQuote: StfmCompanyQuote) {
		this.selectedSummary = null;
		this.symbolStorageService
			.getStockSummary(companyQuote.symbol)
			.pipe(first())
			.subscribe((summary) => {
				console.log('summary', summary);
				if (!summary) {
					DialogService.presentToast(`No stock details for symbol ${companyQuote.symbol} has been found`);
					this.setSelectedSummary(this.suggestions[0].summary);
					return;
				}
				this.setSelectedSummary(summary);
			});
	}

	async tradeSymbol() {
		await this.tradingService.performTransaction(this.selectedSummary);
	}

	private scrollTop() {
		this.scroll.scrollToPosition([0, 0]);
	}

	private initSuggestions() {
		this.graphqlQueryService
			.queryMarketDailyOverview()
			.pipe(first())
			.subscribe((overview) => {
				this.suggestions = LodashService.cloneDeep(overview.stockSuggestions);

				if (!this.selectedSummary) {
					this.setSelectedSummary(this.suggestions[0].summary);
				}
			});
	}

	private setSelectedSummary(summary: Summary) {
		this.selectedSummary = LodashService.cloneDeep(summary);
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

				if (this.selectedSummary && this.selectedSummary.id === res.s) {
					this.selectedSummary.marketPrice = res.p;
				}
			});
	}
}
