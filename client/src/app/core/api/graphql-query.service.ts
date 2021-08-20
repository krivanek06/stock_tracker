import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
	QueryEtfDocumentGQL,
	QueryMarketDailyOverviewGQL,
	QueryStMarketAllCategoriesGQL,
	QueryStMarketDataGQL,
	QueryStMarketHistoryOverviewGQL,
	QueryStockQuotesByPrefixGQL,
	QueryStockScreenerGQL,
	QuerySymbolHistoricalPricesGQL,
	QueryUserIdentificationByUsernameGQL,
	StfmCompanyQuote,
	StfmStockScreenerInput,
	StfmStockScreenerResult,
	StMarketChartDataResultCombined,
	StMarketDailyOverview,
	StMarketDatasetKeyCategory,
	StMarketEtfDocument,
	StMarketOverviewPartialData,
	StUserIndentificationDataFragment,
	SymbolHistoricalPrices,
} from '../graphql-schema';

@Injectable({
	providedIn: 'root',
})
export class GraphqlQueryService {
	constructor(
		private queryUserIndentificationByUsernameGQL: QueryUserIdentificationByUsernameGQL,
		private queryStockQuotesByPrefixGQL: QueryStockQuotesByPrefixGQL,
		private queryMarketDailyOverviewGQL: QueryMarketDailyOverviewGQL,
		private queryStMarketHistoryOverviewGQL: QueryStMarketHistoryOverviewGQL,
		private queryStMarketDataGQL: QueryStMarketDataGQL,
		private queryStMarketAllCategoriesGQL: QueryStMarketAllCategoriesGQL,
		private querySymbolHistoricalPricesGQL: QuerySymbolHistoricalPricesGQL,
		private queryEtfDocumentGQL: QueryEtfDocumentGQL,
		private queryStockScreenerGQL: QueryStockScreenerGQL
	) {}

	querySymbolHistoricalPrices(symbol: string, period: string = '1d'): Observable<SymbolHistoricalPrices> {
		return this.querySymbolHistoricalPricesGQL
			.fetch(
				{ symbol, period },
				{
					fetchPolicy: 'network-only',
				}
			)
			.pipe(map((x) => x.data.querySymbolHistoricalPrices));
	}

	queryUserIdentificationByUsername(usernamePrefix: string): Observable<StUserIndentificationDataFragment[]> {
		return this.queryUserIndentificationByUsernameGQL
			.fetch({
				usernamePrefix,
			})
			.pipe(map((x) => x.data.queryUserPublicDataByUsername));
	}

	queryStockQuotesByPrefix(symbolPrefix: string): Observable<StfmCompanyQuote[]> {
		return this.queryStockQuotesByPrefixGQL
			.fetch({
				symbolPrefix,
			})
			.pipe(map((x) => x.data.queryStockQuotesByPrefix));
	}
	queryMarketDailyOverview(): Observable<StMarketDailyOverview> {
		return this.queryMarketDailyOverviewGQL.fetch().pipe(map((x) => x.data.queryMarketDailyOverview));
	}

	queryStMarketHistoryOverview(): Observable<StMarketOverviewPartialData> {
		return this.queryStMarketHistoryOverviewGQL.fetch().pipe(map((x) => x.data.querySTMarketHistoryOverview));
	}

	queryStockScreener(stockScreenerInput: StfmStockScreenerInput): Observable<StfmStockScreenerResult[]> {
		return this.queryStockScreenerGQL
			.fetch(
				{
					stockScreenerInput,
				},
				{
					fetchPolicy: 'network-only',
				}
			)
			.pipe(map((res) => res.data.queryStockScreener));
	}

	queryEtfDocument(etfName: string): Observable<StMarketEtfDocument> {
		return this.queryEtfDocumentGQL
			.fetch({
				etfName,
			})
			.pipe(map((res) => res.data.queryEtfDocument));
	}

	queryStMarketData(key: string): Observable<StMarketChartDataResultCombined> {
		return this.queryStMarketDataGQL
			.fetch({
				key,
			})
			.pipe(map((x) => x.data.queryStMarketData));
	}

	queryStMarketAllCategories(): Observable<StMarketDatasetKeyCategory[]> {
		return this.queryStMarketAllCategoriesGQL.fetch().pipe(map((x) => x.data.queryStMarketAllCategories.categories));
	}
}
