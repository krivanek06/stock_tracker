import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {NewsArticle, StMarketOverviewPartialData, StMarketTopTableSymbolData} from '../../../../api/customGraphql.service';
import {MarketService} from '../../../../features/market-feature/services/market.service';
import {ComponentScreenUpdateBase} from '../../../../shared/utils/component-base/component-screen-update.base';
import {filter, first, takeUntil} from 'rxjs/operators';
import {MarketPriceWebsocketService} from '../../../../shared/services/market-price-websocket.service';
import {cloneDeep} from 'lodash';
import {MARKET_DAILY_CHANGE_SELECT} from '../../model/market.model';
import {NameValueContainer} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-market-daily-change',
    templateUrl: './market-daily-change.component.html',
    styleUrls: ['./market-daily-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketDailyChangeComponent extends ComponentScreenUpdateBase implements OnInit, OnDestroy {
    news: NewsArticle[] = [];
    topGainers: StMarketTopTableSymbolData[];
    selectedTable: StMarketTopTableSymbolData[];
    selectedTableName: NameValueContainer = MARKET_DAILY_CHANGE_SELECT[1];

    MARKET_DAILY_CHANGE_SELECT = MARKET_DAILY_CHANGE_SELECT;

    constructor(private marketService: MarketService,
                private marketPriceWebsocket: MarketPriceWebsocketService,
                cdr: ChangeDetectorRef) {
        super(cdr);
    }

    ngOnInit() {
        super.ngOnInit();
        this.createCopyOfDailyOverview();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.marketPriceWebsocket.closeConnection();
    }

    changeSelectedTable(event: CustomEvent) {
        // Close connections for symbols in selected table
        if (this.selectedTable) {
            const topGainersSymbols = this.topGainers.map(s => s.symbol);
            this.selectedTable.map(s => s.symbol)
                .filter(s => !topGainersSymbols.includes(s))
                .forEach(s => this.marketPriceWebsocket.closeConnectionForSymbol(s));
        }

        this.selectedTableName = event.detail.value;

        // init subscription for new symbols
        this.marketService.queryMarketDailyOverview().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.selectedTable = cloneDeep(res[this.selectedTableName.value]);
            this.selectedTable.forEach(s => this.marketPriceWebsocket.createSubscribeForSymbol(s.symbol));
        });
    }

    private createCopyOfDailyOverview() {
        this.marketService.queryMarketDailyOverview().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.news = res.news;
            this.topGainers = cloneDeep(res.stocks_day_gainers);
            this.selectedTable = cloneDeep(res.stocks_day_losers);
            this.initSubscriptionForDailyOverview();
        });
    }

    private initSubscriptionForDailyOverview() {
        this.marketPriceWebsocket.getIsConnected().pipe(filter(x => !x), first()).subscribe(() => {
            this.topGainers.forEach(data => this.marketPriceWebsocket.createSubscribeForSymbol(data.symbol));
        });

        this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
            filter(res => !!res), // filter null & undefined
            takeUntil(this.destroy$)
        ).subscribe(res => {
            let data = this.topGainers.find(s => s.symbol === res.s);
            if (data) {
                data.regularMarketPrice = res.p;
                data.regularMarketVolume += res.v;
            }
            data = this.selectedTable.find(s => s.symbol === res.s);
            if (data) {
                data.regularMarketPrice = res.p;
                data.regularMarketVolume += res.v;
            }
        });
    }


}
