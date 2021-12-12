import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
	QueryStockDetailsGQL,
	QueryStockFinancialReportsGQL,
	QueryStockSummaryGQL,
	StockDetails,
	StockDetailsFinancialReports,
	Summary,
} from '../../graphql-schema';

@Injectable({
	providedIn: 'root',
})
export class SymbolStorageService {
	private activeSymbol$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

	constructor(
		private queryStockDetailsGQL: QueryStockDetailsGQL,
		private queryStockSummaryGQL: QueryStockSummaryGQL,
		private queryStockFinancialReportsGQL: QueryStockFinancialReportsGQL
	) {}

	get activeSymbol(): string | null {
		return this.activeSymbol$.getValue();
	}

	getActiveSymbol(): Observable<string | null> {
		return this.activeSymbol$.asObservable();
	}

	setActiveSymbol(symbol: string | null) {
		this.activeSymbol$.next(symbol);
	}

	getStockDetails(symbol = this.activeSymbol): Observable<StockDetails | null> {
		if (!symbol) {
			return of(null);
		}
		return this.queryStockDetailsGQL
			.fetch({
				symbol,
			})
			.pipe(map((res) => res.data.queryStockDetails as StockDetails));
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

	getStockFinancialReports(symbol = this.activeSymbol): Observable<StockDetailsFinancialReports | null> {
		if (!symbol) {
			return of(null);
		}
		return this.queryStockFinancialReportsGQL
			.fetch({
				symbol,
			})
			.pipe(map((res) => res.data.queryStockFinancialReports as StockDetailsFinancialReports));
	}
}
