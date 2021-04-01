import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {
    ComponentScreenUpdateBaseDirective,
    FinnhubWebsocketService,
    GraphqlQueryService,
    NewsArticle,
    StEventCalendarData,
    StEventCalendarEarningsData,
    StMarketTopTableSymbolData
} from '@core';
import {NameValueContainer, SymbolIdentification} from '@shared';
import {takeUntil} from 'rxjs/operators';
import {cloneDeep} from 'lodash';
import {MARKET_DAILY_CHANGE_SELECT} from '../../model/market.model';
import {Observable, of} from 'rxjs';
import {MarketPageFacadeService} from '../../services/market-page-facade.service';

@Component({
    selector: 'app-market-daily-change',
    templateUrl: './market-daily-change.component.html',
    styleUrls: ['./market-daily-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketDailyChangeComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    calendarEvents$: Observable<StEventCalendarData[]>;

    topGainers: StMarketTopTableSymbolData[] = [];
    selectedTable: StMarketTopTableSymbolData[] = [];
    dailyNews: NewsArticle[] = [];
    earnings: StEventCalendarEarningsData[] = [];
    selectedTableName: NameValueContainer = MARKET_DAILY_CHANGE_SELECT[1];

    MARKET_DAILY_CHANGE_SELECT = MARKET_DAILY_CHANGE_SELECT;

    constructor(private graphqlQueryService: GraphqlQueryService,
                private finnhubWebsocketService: FinnhubWebsocketService,
                private marketPageFacadeService: MarketPageFacadeService,
                public cdr: ChangeDetectorRef) {
        super(cdr, 'MarketDailyChangeComponent');
    }

    ngOnInit() {
        super.ngOnInit();
        this.createCopyOfDailyOverview();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.finnhubWebsocketService.closeConnection(this.componentName);
    }

    changeSelectedTopTable(event: CustomEvent) {
        // Close connections for symbols in selected table
        if (this.selectedTable) {
            const topGainersSymbols = this.topGainers.map(s => s.symbol);
            this.selectedTable.map(s => s.symbol)
                .filter(s => !topGainersSymbols.includes(s))
                .forEach(s => this.finnhubWebsocketService.closeConnectionForSymbol(this.componentName, s));
        }

        this.selectedTableName = event.detail.value;

        // init subscription for new symbols
        this.graphqlQueryService.queryMarketDailyOverview().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.selectedTable = cloneDeep(res[this.selectedTableName.value]);
            this.selectedTable.forEach(s => this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, s.symbol));
        });
    }

    changeDisplayedEarningsDate(date: string) {
        this.calendarEvents$ = this.graphqlQueryService.queryStMarketCalendarEvents(date);
    }

    async showStockEarningsOnDate(selectedDate: string) {
        await this.marketPageFacadeService.showStockEarningsOnDate(selectedDate);
    }

    async showSummary(symbolIdentification: SymbolIdentification) {
        await this.marketPageFacadeService.showSymbolSummary(symbolIdentification, false);
    }

    private createCopyOfDailyOverview() {
        this.graphqlQueryService.queryMarketDailyOverview().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.calendarEvents$ = of(res.events);
            this.dailyNews = res.news;
            this.earnings = res.earnings;
            this.topGainers = cloneDeep(res.stocks_day_gainers);
            this.selectedTable = cloneDeep(res.stocks_day_losers);
            this.initSubscriptionForDailyOverview();
        });
    }

    private initSubscriptionForDailyOverview() {
        this.topGainers.forEach(data => this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, data.symbol));
        this.selectedTable.forEach(data => this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, data.symbol));

        this.finnhubWebsocketService.getSubscribedSymbolsResult().pipe(
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
