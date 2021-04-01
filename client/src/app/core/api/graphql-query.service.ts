import {Injectable} from '@angular/core';
import {
    QueryMarketDailyOverviewGQL,
    QueryStGroupPartialDataByGroupNameGQL,
    QueryStMarketAllCategoriesGQL,
    QueryStMarketCalendarEventsEarningsGQL,
    QueryStMarketCalendarEventsGQL,
    QueryStMarketDataGQL,
    QueryStMarketHistoryOverviewGQL,
    QueryStockSummariesGQL,
    QueryStUserPartialInformationByUsernameGQL,
    StEventCalendarData,
    StEventCalendarEarningsData,
    StGroupPartialData,
    StMarketChartDataResultCombined,
    StMarketDailyOverview,
    StMarketDatasetKeyCategory,
    StMarketOverviewPartialData,
    StUserPartialInformation,
    Summary,
} from '../graphql-schema';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GraphqlQueryService {

    constructor(private queryStUserPartialInformationByUsernameGQL: QueryStUserPartialInformationByUsernameGQL,
                private groupPartialDataByGroupNameGQL: QueryStGroupPartialDataByGroupNameGQL,
                private queryStockSummariesGQL: QueryStockSummariesGQL,
                private queryMarketDailyOverviewGQL: QueryMarketDailyOverviewGQL,
                private queryStMarketHistoryOverviewGQL: QueryStMarketHistoryOverviewGQL,
                private queryStMarketCalendarEventsGQL: QueryStMarketCalendarEventsGQL,
                private queryStMarketCalendarEventsEarningsGQL: QueryStMarketCalendarEventsEarningsGQL,
                private queryStMarketDataGQL: QueryStMarketDataGQL,
                private queryStMarketAllCategoriesGQL: QueryStMarketAllCategoriesGQL) {
    }


    queryUserPartialInformationByUsername(usernamePrefix: string): Observable<StUserPartialInformation[]> {
        return this.queryStUserPartialInformationByUsernameGQL.fetch({
            usernamePrefix
        }).pipe(map(x => x.data.querySTUserPartialInformationByUsername));
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