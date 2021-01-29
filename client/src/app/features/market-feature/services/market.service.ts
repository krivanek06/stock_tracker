import {Injectable} from '@angular/core';
import {MarketPriceWebsocketService, MarketSymbolResult} from '../../../shared/services/market-price-websocket.service';
import {StockDetailsService} from '../../stock-details-feature/services/stock-details.service';
import {Observable} from 'rxjs';
import {filter, map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {
    QueryMarketDailyOverviewGQL, QueryStMarketHistoryOverviewGQL, StMarketDailyOverview, StMarketOverviewPartialData,
} from '../../../api/customGraphql.service';

@Injectable({
    providedIn: 'root'
})
export class MarketService {

    constructor(private marketPriceWebsocket: MarketPriceWebsocketService,
                private stockDetailsService: StockDetailsService,
                private queryMarketDailyOverviewGQL: QueryMarketDailyOverviewGQL,
                private queryStMarketHistoryOverviewGQL: QueryStMarketHistoryOverviewGQL) {
    }

    /**
     * Init websocket connection for symbol suggestions and return market price for one symbol
     */
    initSubscriptionForStockSuggestions(): Observable<MarketSymbolResult> {
        return this.queryMarketDailyOverview().pipe(
            map(x => x.stock_suggestions),
            tap(suggestions => suggestions.forEach(s => this.marketPriceWebsocket.createSubscribeForSymbol(s.summary.symbol))),
            switchMap(() => this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
                filter(res => !!res), // filter null & undefined
            ))
        );
    }

    queryMarketDailyOverview(): Observable<StMarketDailyOverview> {
        return this.queryMarketDailyOverviewGQL.fetch().pipe(map(x => x.data.queryMarketDailyOverview));
    }

    queryStMarketHistoryOverview(): Observable<StMarketOverviewPartialData> {
        return this.queryStMarketHistoryOverviewGQL.fetch().pipe(map(x => x.data.querySTMarketHistoryOverview));
    }
}
