import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';
import { QueryMarketDailyOverviewGQL } from '../graphql-schema';
import { MarketSymbolResult } from '../model';
import { FinnhubWebsocketService } from './finnhub-websocket.service';
import { UserStorageService } from './storage/user-storage.service';

@Injectable({
	providedIn: 'root',
})
export class SubscriptionWebsocketService {
	private readonly HOLDINGS = 'HOLDINGS_SUBSCRIPTION';
	private readonly WATCHLIST = 'WATCHLIST_SUBSCRIPTION';
	private readonly MARKER_SUGGESTIONS = 'MARKET_SUGGESTION_SUBSCRIPTION';

	constructor(
		private finnhubWebsocket: FinnhubWebsocketService,
		private userStorageService: UserStorageService,
		private queryMarketDailyOverviewGQL: QueryMarketDailyOverviewGQL
	) {}

	initSubscriptionHoldings(): Observable<MarketSymbolResult> {
		return this.userStorageService.getUser().pipe(
			filter((x) => !!x),
			first(),
			tap((user) => user.holdings.forEach((h) => this.finnhubWebsocket.createSubscribeForSymbol(this.HOLDINGS, h?.symbol))),
			switchMap(() => this.finnhubWebsocket.getSubscribedSymbolsResult())
		);
	}

	closeSubscriptionHoldings() {
		this.finnhubWebsocket.closeConnection(this.HOLDINGS);
	}

	initSubscriptionWatchlist(): Observable<MarketSymbolResult> {
		const userWatchlist = this.userStorageService.user.stockWatchlist;
		const symbols = userWatchlist
			.map((w) => w?.summaries?.map((x) => x?.symbol as string))
			.reduce((accumulator, value) => (accumulator || []).concat(value || []), []) as string[];
		const distinctStocks = [...new Set(...symbols)] as string[];

		distinctStocks.forEach((stock) => this.finnhubWebsocket.createSubscribeForSymbol(this.WATCHLIST, stock));

		return this.finnhubWebsocket.getSubscribedSymbolsResult();
	}

	initSubscriptionStockSuggestions(): Observable<MarketSymbolResult> {
		return this.queryMarketDailyOverviewGQL
			.fetch()
			.pipe(map((x) => x.data.queryMarketDailyOverview))
			.pipe(
				map((x) => x?.stockSuggestions),
				tap((suggestions) =>
					suggestions?.forEach((s) => this.finnhubWebsocket.createSubscribeForSymbol(this.MARKER_SUGGESTIONS, s?.summary?.symbol))
				),
				switchMap(() => this.finnhubWebsocket.getSubscribedSymbolsResult())
			);
	}

	closeSubscriptionStockSuggestions() {
		this.finnhubWebsocket.closeConnection(this.MARKER_SUGGESTIONS);
	}
}
