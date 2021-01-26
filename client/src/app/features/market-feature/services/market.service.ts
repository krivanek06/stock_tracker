import {Injectable} from '@angular/core';
import {MarketPriceWebsocketService, MarketSymbolResult} from '../../../shared/services/market-price-websocket.service';
import {StockDetailsService} from '../../stock-details-feature/services/stock-details.service';
import {Observable} from 'rxjs';
import {filter, map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {
    QueryStMarketOverviewPartialDataGQL,
    QueryStMarketSp500AllCategoryGQL, StMarketOverviewPartialData,
    StMarketSp500AllCategory,
    StMarketSp500AllCategoryFragmentFragment
} from '../../../api/customGraphql.service';

@Injectable({
    providedIn: 'root'
})
export class MarketService {

    constructor(private marketPriceWebsocket: MarketPriceWebsocketService,
                private stockDetailsService: StockDetailsService,
                private queryStMarketSp500AllCategoryGQL: QueryStMarketSp500AllCategoryGQL,
                private queryStMarketOverviewPartialDataGQL: QueryStMarketOverviewPartialDataGQL) {
    }

    /**
     * Init websocket connection for symbol suggestions and return market price for one symbol
     */
    initSubscriptionForStockSuggestions(): Observable<MarketSymbolResult> {
        return this.stockDetailsService.getStockDailyInformation().pipe(
            map(x => x.dailySuggestions),
            tap(suggestions => suggestions.forEach(s => this.marketPriceWebsocket.createSubscribeForSymbol(s.summary.symbol))),
            switchMap(() => this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
                filter(res => !!res), // filter null & undefined
            ))
        );
    }

    queryStMarketSp500AllCategory(): Observable<StMarketSp500AllCategory> {
        return this.queryStMarketSp500AllCategoryGQL.fetch().pipe(map(x => x.data.querySTMarketSP500AllCategory));
    }

    queryStMarketOverviewPartialData(): Observable<StMarketOverviewPartialData> {
        return this.queryStMarketOverviewPartialDataGQL.fetch().pipe(map(x => x.data.querySTMarketOverviewPartialData));
    }
}
