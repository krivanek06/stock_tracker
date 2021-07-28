import {Injectable} from '@angular/core';
import {
    QueryEtfDocumentGQL,
    QueryMarketDailyOverviewGQL,
    QueryStGroupPartialDataByGroupNameGQL,
    QueryStMarketAllCategoriesGQL,
    QueryStMarketDataGQL,
    QueryStMarketHistoryOverviewGQL,
    QueryStockQuotesByPrefixGQL,
    QuerySymbolHistoricalPricesGQL,
    QueryUserPublicDataByUsernameGQL,
    StfmCompanyQuote,
    StGroupIdentificationDataFragment,
    StMarketChartDataResultCombined,
    StMarketDailyOverview,
    StMarketDatasetKeyCategory,
    StMarketEtfDocument,
    StMarketOverviewPartialData,
    StUserIndentificationDataFragment,
    SymbolHistoricalPrices,
} from '../graphql-schema';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GraphqlQueryService {

    constructor(private queryUserPublicDataByUsernameGQL: QueryUserPublicDataByUsernameGQL,
                private groupPartialDataByGroupNameGQL: QueryStGroupPartialDataByGroupNameGQL,
                private queryStockQuotesByPrefixGQL: QueryStockQuotesByPrefixGQL,
                private queryMarketDailyOverviewGQL: QueryMarketDailyOverviewGQL,
                private queryStMarketHistoryOverviewGQL: QueryStMarketHistoryOverviewGQL,
                private queryStMarketDataGQL: QueryStMarketDataGQL,
                private queryStMarketAllCategoriesGQL: QueryStMarketAllCategoriesGQL,
                private querySymbolHistoricalPricesGQL: QuerySymbolHistoricalPricesGQL,
                private queryEtfDocumentGQL: QueryEtfDocumentGQL) {
    }


    querySymbolHistoricalPrices(symbol: string, period: string = '1d'): Observable<SymbolHistoricalPrices> {
        return this.querySymbolHistoricalPricesGQL.fetch({symbol, period}, {
            fetchPolicy: 'network-only'
        }).pipe(map(x => x.data.querySymbolHistoricalPrices));
    }

    queryUserPublicDataByUsername(usernamePrefix: string): Observable<StUserIndentificationDataFragment[]> {
        return this.queryUserPublicDataByUsernameGQL.fetch({
            usernamePrefix
        }).pipe(map(x => x.data.queryUserPublicDataByUsername));
    }

    queryStockQuotesByPrefix(symbolPrefix: string): Observable<StfmCompanyQuote[]> {
        return this.queryStockQuotesByPrefixGQL.fetch({
            symbolPrefix
        }).pipe(map(x => x.data.queryStockQuotesByPrefix));
    }

    querySTGroupPartialDataByGroupName(groupName: string): Observable<StGroupIdentificationDataFragment[]> {
        return this.groupPartialDataByGroupNameGQL.fetch({
            groupName
        }).pipe(map(x => x.data.querySTGroupPartialDataByGroupName.groups));
    }

    queryMarketDailyOverview(): Observable<StMarketDailyOverview> {
        return this.queryMarketDailyOverviewGQL.fetch().pipe(map(x => x.data.queryMarketDailyOverview));
    }

    queryStMarketHistoryOverview(): Observable<StMarketOverviewPartialData> {
        return this.queryStMarketHistoryOverviewGQL.fetch().pipe(map(x => x.data.querySTMarketHistoryOverview));
    }

    /*queryStMarketCalendarEvents(date: string): Observable<StEventCalendarData[]> {
        return this.queryStMarketCalendarEventsGQL.fetch({
            date
        }).pipe(map(x => x.data.queryStMarketCalendarEvents.events));
    }

    queryStMarketCalendarEventsEarnings(date: string): Observable<StEventCalendarEarningsData[]> {
        return this.queryStMarketCalendarEventsEarningsGQL.fetch({
            date
        }).pipe(map(x => x.data.queryStMarketCalendarEventsEarnings.earnings));
    }*/

    queryEtfDocument(etfName: string): Observable<StMarketEtfDocument> {
        return this.queryEtfDocumentGQL.fetch({
            etfName
        }).pipe(map(res => res.data.queryEtfDocument));
    }

    queryStMarketData(key: string): Observable<StMarketChartDataResultCombined> {
        return this.queryStMarketDataGQL.fetch({
            key
        }).pipe(map(x => x.data.queryStMarketData));
    }

    queryStMarketAllCategories(): Observable<StMarketDatasetKeyCategory[]> {
        return this.queryStMarketAllCategoriesGQL.fetch().pipe(map(x => x.data.queryStMarketAllCategories.categories));
    }
}
