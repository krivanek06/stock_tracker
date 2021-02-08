import {Injectable} from '@angular/core';
import {StockDetailsService} from '../../stock-details-feature/services/stock-details.service';
import {Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {
    QueryMarketDailyOverviewGQL, QueryStMarketAllCategoriesGQL,
    QueryStMarketCalendarEventsEarningsGQL,
    QueryStMarketCalendarEventsGQL, QueryStMarketDataGQL,
    QueryStMarketHistoryOverviewGQL,
    StEventCalendarData,
    StEventCalendarEarningsData, StMarketChartDataResultCombined,
    StMarketDailyOverview, StMarketDatasetKeyCategories, StMarketDatasetKeyCategory,
    StMarketOverviewPartialData,
} from '../../../api/customGraphql.service';
import {FinnhubWebsocketService} from '../../../shared/services/finnhub-websocket.service';
import {MarketSymbolResult} from '../../../shared/models/sharedModel';

@Injectable({
    providedIn: 'root'
})
export class MarketService {
    private serviceName = 'MarketService';

    constructor(private finnhubWebsocketService: FinnhubWebsocketService,
                private stockDetailsService: StockDetailsService,
                private queryMarketDailyOverviewGQL: QueryMarketDailyOverviewGQL,
                private queryStMarketHistoryOverviewGQL: QueryStMarketHistoryOverviewGQL,
                private queryStMarketCalendarEventsGQL: QueryStMarketCalendarEventsGQL,
                private queryStMarketCalendarEventsEarningsGQL: QueryStMarketCalendarEventsEarningsGQL,
                private queryStMarketDataGQL: QueryStMarketDataGQL,
                private queryStMarketAllCategoriesGQL: QueryStMarketAllCategoriesGQL) {
    }

    /**
     * Init websocket connection for symbol suggestions and return market price for one symbol
     */
    initSubscriptionForStockSuggestions(): Observable<MarketSymbolResult> {
        return this.queryMarketDailyOverview().pipe(
            map(x => x.stock_suggestions),
            tap(suggestions => suggestions.forEach(s =>
                this.finnhubWebsocketService.createSubscribeForSymbol(this.serviceName, s.summary.symbol))),
            switchMap(() => this.finnhubWebsocketService.getSubscribedSymbolsResult())
        );
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
