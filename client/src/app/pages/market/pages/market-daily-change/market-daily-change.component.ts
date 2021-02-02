import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {
    NewsArticle, StEventCalendarData,
    StEventCalendarEarningsData,
    StMarketTopTableSymbolData
} from '../../../../api/customGraphql.service';
import {MarketService} from '../../../../features/market-feature/services/market.service';
import {ComponentScreenUpdateBase} from '../../../../shared/utils/component-base/component-screen-update.base';
import {filter, first, takeUntil} from 'rxjs/operators';
import {MarketPriceWebsocketService} from '../../../../shared/services/market-price-websocket.service';
import {cloneDeep} from 'lodash';
import {MARKET_DAILY_CHANGE_SELECT} from '../../model/market.model';
import {NameValueContainer, SymbolIdentification} from '../../../../shared/models/sharedModel';
import {Observable, of} from 'rxjs';
import {ModalController} from '@ionic/angular';
import {MarketEarningsModalComponent} from '../../../../features/market-feature/entry-components/market-earnings-modal/market-earnings-modal.component';
import {SymbolLookupModalComponent} from '../../../../features/stock-details-feature/entry-components/symbol-lookup-modal/symbol-lookup-modal.component';

@Component({
    selector: 'app-market-daily-change',
    templateUrl: './market-daily-change.component.html',
    styleUrls: ['./market-daily-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketDailyChangeComponent extends ComponentScreenUpdateBase implements OnInit, OnDestroy {
    calendarEvents$: Observable<StEventCalendarData[]>;

    topGainers: StMarketTopTableSymbolData[] = [];
    selectedTable: StMarketTopTableSymbolData[] = [];
    dailyNews: NewsArticle[] = [];
    earnings: StEventCalendarEarningsData[] = [];
    selectedTableName: NameValueContainer = MARKET_DAILY_CHANGE_SELECT[1];

    MARKET_DAILY_CHANGE_SELECT = MARKET_DAILY_CHANGE_SELECT;

    constructor(private marketService: MarketService,
                private marketPriceWebsocket: MarketPriceWebsocketService,
                private modalController: ModalController,
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

    changeSelectedTopTable(event: CustomEvent) {
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

    changeDisplayedEvents(date: string) {
        this.calendarEvents$ = this.marketService.queryStMarketCalendarEvents(date);
    }

    async changeDisplayedEarningsDate(selectedDate: string) {
        const modal = await this.modalController.create({
            component: MarketEarningsModalComponent,
            componentProps: {selectedDate},
            cssClass: 'custom-modal'
        });
        await modal.present();
        const closed = await modal.onDidDismiss();
        const symbolIdentification = closed?.data?.symbolIdentification;

        if (symbolIdentification) {
            const modalSymbolLookup = await this.modalController.create({
                component: SymbolLookupModalComponent,
                componentProps: {symbolIdentification},
                cssClass: 'custom-modal'
            });
            return await modalSymbolLookup.present();
        }
    }

    async showSummary(symbolIdentification: SymbolIdentification) {
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {symbolIdentification, showAddToWatchlistOption: false},
            cssClass: 'custom-modal'
        });
        await modal.present();
    }

    private createCopyOfDailyOverview() {
        this.marketService.queryMarketDailyOverview().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.calendarEvents$ = of(res.events);
            this.dailyNews = res.news;
            this.earnings = res.earnings;
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
