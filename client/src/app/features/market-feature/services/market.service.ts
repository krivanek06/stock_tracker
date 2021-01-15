import {Injectable} from '@angular/core';
import {MarketPriceWebsocketService, MarketSymbolResult} from '../../../shared/services/market-price-websocket.service';
import {StockDetailsService} from '../../stock-details-feature/services/stock-details.service';
import {Observable} from 'rxjs';
import {filter, map, switchMap, takeUntil, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MarketService {

    constructor(private marketPriceWebsocket: MarketPriceWebsocketService,
                private stockDetailsService: StockDetailsService) {
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
}
