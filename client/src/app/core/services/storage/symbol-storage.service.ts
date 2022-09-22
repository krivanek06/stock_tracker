import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
	QueryStockDetailsFinancialGrowthGQL,
	QueryStockDetailsFinancialRatiosGQL,
	QueryStockDetailsGQL,
	QueryStockDetailsKeyMetricsGQL,
	QueryStockSummaryGQL,
	StDetailsFinancialGrowthFragment,
	StDetailsFinancialRatiosFragment,
	StDetailsKeyMetricsFragment,
	StockDetails,
	Summary,
} from '../../graphql-schema';
import { Period } from '../../model';

@Injectable({
	providedIn: 'root',
})
export class SymbolStorageService {
	private activeSymbol$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
	private activeStock$: BehaviorSubject<StockDetails | null> = new BehaviorSubject<StockDetails | null>(null);

	constructor(
		private queryStockDetailsGQL: QueryStockDetailsGQL,
		private queryStockSummaryGQL: QueryStockSummaryGQL,
		private queryStockDetailsFinancialRatiosGQL: QueryStockDetailsFinancialRatiosGQL,
		private queryStockDetailsFinancialGrowthGQL: QueryStockDetailsFinancialGrowthGQL,
		private queryStockDetailsKeyMetricsGQL: QueryStockDetailsKeyMetricsGQL
	) {
		this.watchActiveStockSymbol();
	}

	get activeSymbol(): string | null {
		return this.activeSymbol$.getValue();
	}

	getActiveSymbol(): Observable<string | null> {
		return this.activeSymbol$.asObservable();
	}

	setActiveSymbol(symbol: string | null) {
		this.activeSymbol$.next(null); // fixed error with rendering charts on details
		this.activeSymbol$.next(symbol);
	}

	getStockDetails(): Observable<StockDetails | null> {
		return this.activeStock$.asObservable();
	}

	queryStockDetailsFinancialGrowth(period: Period = 'quarter', allData = false): Observable<StDetailsFinancialGrowthFragment | null> {
		if (!this.activeSymbol) {
			return of(null);
		}
		return this.queryStockDetailsFinancialGrowthGQL
			.fetch({
				symbol: this.activeSymbol,
				period,
				allData,
			})
			.pipe(map((res) => res.data.queryStockDetailsFinancialGrowth as StDetailsFinancialGrowthFragment));
	}

	queryStockDetailsKeyMetrics(period: Period = 'quarter', allData = false): Observable<StDetailsKeyMetricsFragment | null> {
		if (!this.activeSymbol) {
			return of(null);
		}
		return this.queryStockDetailsKeyMetricsGQL
			.fetch({
				symbol: this.activeSymbol,
				period,
				allData,
			})
			.pipe(map((res) => res.data.queryStockDetailsKeyMetrics as StDetailsKeyMetricsFragment));
	}

	queryStockDetailsFinancialRatios(period: Period = 'quarter', allData = false): Observable<StDetailsFinancialRatiosFragment | null> {
		if (!this.activeSymbol) {
			return of(null);
		}
		return this.queryStockDetailsFinancialRatiosGQL
			.fetch({
				symbol: this.activeSymbol,
				period,
				allData,
			})
			.pipe(map((res) => res.data.queryStockDetailsFinancialRatios as StDetailsFinancialRatiosFragment));
	}

	reloadStockDetails(symbol = this.activeSymbol): Observable<any> {
		if (!symbol) {
			return of(null);
		}
		return this.queryStockDetailsGQL
			.fetch(
				{
					symbol,
					reload: true,
				},
				{
					fetchPolicy: 'network-only',
				}
			)
			.pipe(map((res) => res.data.queryStockDetails));
	}

	getStockSummary(symbol = this.activeSymbol): Observable<Summary | null> {
		if (!symbol) {
			return of(null);
		}

		return this.queryStockSummaryGQL
			.fetch({
				symbol,
			})
			.pipe(map((res) => res.data.queryStockSummary as Summary));
	}
	private watchActiveStockSymbol(): void {
		this.activeSymbol$
			.pipe(
				switchMap((symbol) => {
					if (!symbol) {
						return of(null);
					}
					return this.queryStockDetailsGQL
						.fetch({
							symbol,
						})
						.pipe(map((res) => res.data.queryStockDetails as StockDetails));
				})
			)
			.subscribe((stockDetails) => {
				console.log('received stock details', stockDetails);
				this.activeStock$.next(stockDetails);
			});
	}
}
