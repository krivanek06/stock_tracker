import {Injectable} from '@angular/core';
import {
    Maybe,
    QueryMarketDailyOverviewGQL,
    QueryStGroupPartialDataByGroupNameGQL,
    QueryStMarketAllCategoriesGQL,
    QueryStMarketCalendarEventsEarningsGQL,
    QueryStMarketCalendarEventsGQL,
    QueryStMarketDataGQL,
    QueryStMarketHistoryOverviewGQL,
    QueryStMarketSymbolHistoricalChartDataGQL,
    QueryStockSummariesGQL,
    QueryUserPublicDataByUsernameGQL,
    StEventCalendarData,
    StEventCalendarEarningsData,
    StGroupPartialData,
    StMarketChartDataResultCombined,
    StMarketDailyOverview,
    StMarketDatasetKeyCategory,
    StMarketOverviewPartialData,
    StMarketSymbolHistoricalChartData,
    StUserPublicDataFragmentFragment,
    Summary,
} from '../graphql-schema';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GraphqlQueryService {

    constructor(private queryUserPublicDataByUsernameGQL: QueryUserPublicDataByUsernameGQL,
                private groupPartialDataByGroupNameGQL: QueryStGroupPartialDataByGroupNameGQL,
                private queryStockSummariesGQL: QueryStockSummariesGQL,
                private queryMarketDailyOverviewGQL: QueryMarketDailyOverviewGQL,
                private queryStMarketHistoryOverviewGQL: QueryStMarketHistoryOverviewGQL,
                private queryStMarketCalendarEventsGQL: QueryStMarketCalendarEventsGQL,
                private queryStMarketCalendarEventsEarningsGQL: QueryStMarketCalendarEventsEarningsGQL,
                private queryStMarketDataGQL: QueryStMarketDataGQL,
                private queryStMarketAllCategoriesGQL: QueryStMarketAllCategoriesGQL,
                private queryStMarketSymbolHistoricalChartDataGQL: QueryStMarketSymbolHistoricalChartDataGQL) {
    }


    queryStMarketSymbolHistoricalChartData(symbol: string, period: string = '1d'): Observable<StMarketSymbolHistoricalChartData> {
        return this.queryStMarketSymbolHistoricalChartDataGQL.fetch({
            symbol,
            period
        }).pipe(map(x => x.data.querySTMarketSymbolHistoricalChartData));
    }

    queryUserPublicDataByUsername(usernamePrefix: string): Observable<Array<Maybe<{ __typename?: 'STUserPublicData' } & StUserPublicDataFragmentFragment>>> {
        return this.queryUserPublicDataByUsernameGQL.fetch({
            usernamePrefix
        }).pipe(map(x => x.data.queryUserPublicDataByUsername));
    }

    queryStockSummaries(symbolPrefix: string): Observable<Summary[]> {
        return this.queryStockSummariesGQL.fetch({
            symbolPrefix
        }).pipe(map(x => x.data.queryStockSummaries.summaries));
    }

    querySTGroupPartialDataByGroupName(groupName: string): Observable<StGroupPartialData[]> {
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

    queryStMarketCalendarEvents(date: string): Observable<StEventCalendarData[]> {
        return this.queryStMarketCalendarEventsGQL.fetch({
            date
        }).pipe(map(x => x.data.queryStMarketCalendarEvents.events));
    }

    queryStMarketCalendarEventsEarnings(date: string): Observable<StEventCalendarEarningsData[]> {
        return this.queryStMarketCalendarEventsEarningsGQL.fetch({
            date
        }).pipe(map(x => x.data.queryStMarketCalendarEventsEarnings.earnings));
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
