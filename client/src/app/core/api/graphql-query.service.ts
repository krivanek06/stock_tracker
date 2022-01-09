import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
	QueryEtfDocumentGQL,
	QueryHallOfFameGQL,
	QueryMarketDailyOverviewGQL,
	QueryStMarketAllCategoriesGQL,
	QueryStMarketDataGQL,
	QueryStMarketHistoryOverviewGQL,
	QueryStockQuotesByPrefixGQL,
	QueryStockScreenerGQL,
	QuerySymbolHistoricalPricesGQL,
	StfmCompanyQuote,
	StfmStockScreenerInput,
	StfmStockScreenerResultWrapper,
	StHallOfFame,
	StMarketChartDataResultCombined,
	StMarketDailyOverview,
	StMarketDatasetKeyCategory,
	StMarketEtfDocument,
	StMarketOverviewPartialData,
	SymbolHistoricalPrices,
} from '../graphql-schema';
import {} from './../graphql-schema/customGraphql.service';

@Injectable({
	providedIn: 'root',
})
export class GraphqlQueryService {
	constructor(
		private queryStockQuotesByPrefixGQL: QueryStockQuotesByPrefixGQL,
		private queryMarketDailyOverviewGQL: QueryMarketDailyOverviewGQL,
		private queryStMarketHistoryOverviewGQL: QueryStMarketHistoryOverviewGQL,
		private queryStMarketDataGQL: QueryStMarketDataGQL,
		private queryStMarketAllCategoriesGQL: QueryStMarketAllCategoriesGQL,
		private querySymbolHistoricalPricesGQL: QuerySymbolHistoricalPricesGQL,
		private queryEtfDocumentGQL: QueryEtfDocumentGQL,
		private queryStockScreenerGQL: QueryStockScreenerGQL,
		private queryHallOfFameGQL: QueryHallOfFameGQL
	) {}

	queryHallOfFame(): Observable<StHallOfFame> {
		return this.queryHallOfFameGQL.fetch().pipe(map((res) => res.data.queryHallOfFame));
	}

	querySymbolHistoricalPrices(symbol: string, period: string = '1d'): Observable<SymbolHistoricalPrices> {
		return this.querySymbolHistoricalPricesGQL
			.fetch(
				{ symbol, period },
				{
					fetchPolicy: 'network-only',
				}
			)
			.pipe(map((x) => x.data.querySymbolHistoricalPrices as SymbolHistoricalPrices));
	}

	queryStockQuotesByPrefix(symbolPrefix: string): Observable<StfmCompanyQuote[]> {
		return this.queryStockQuotesByPrefixGQL
			.fetch({
				symbolPrefix,
			})
			.pipe(map((x) => x.data.queryStockQuotesByPrefix as StfmCompanyQuote[]));
	}
	queryMarketDailyOverview(): Observable<StMarketDailyOverview> {
		const interval = 1000 * 60 * 11; // 11 minutes;
		return this.queryMarketDailyOverviewGQL
			.watch({}, { pollInterval: interval, fetchPolicy: 'network-only' })
			.valueChanges.pipe(map((x) => x.data.queryMarketDailyOverview as StMarketDailyOverview));
	}

	queryStMarketHistoryOverview(): Observable<StMarketOverviewPartialData> {
		return this.queryStMarketHistoryOverviewGQL.fetch().pipe(map((x) => x.data.querySTMarketHistoryOverview as StMarketOverviewPartialData));
	}

	queryStockScreener(stockScreenerInput: StfmStockScreenerInput, offset: number, limit: number): Observable<StfmStockScreenerResultWrapper> {
		return this.queryStockScreenerGQL
			.fetch(
				{
					stockScreenerInput,
					limit,
					offset,
				},
				{
					fetchPolicy: 'network-only',
				}
			)
			.pipe(map((res) => res.data.queryStockScreener as StfmStockScreenerResultWrapper));
	}

	queryEtfDocument(etfName: string): Observable<StMarketEtfDocument> {
		return this.queryEtfDocumentGQL
			.fetch({
				etfName,
			})
			.pipe(map((res) => res.data.queryEtfDocument as StMarketEtfDocument));
	}

	queryStMarketData(key: string): Observable<StMarketChartDataResultCombined> {
		return this.queryStMarketDataGQL
			.fetch({
				key,
			})
			.pipe(map((x) => x.data.queryStMarketData as StMarketChartDataResultCombined));
	}

	queryStMarketAllCategories(): Observable<StMarketDatasetKeyCategory[]> {
		return this.queryStMarketAllCategoriesGQL.fetch().pipe(map((x) => x.data.queryStMarketAllCategories?.categories as StMarketDatasetKeyCategory[]));
	}
}
