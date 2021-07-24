import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {distinctUntilChanged, filter, map, mergeAll} from 'rxjs/operators';
import {MarketSymbolResult} from '../model';
import {UserStorageService} from './storage/user-storage.service';


@Injectable({
    providedIn: 'root'
})
export class FinnhubWebsocketService {
    private subscribedSymbols: Map<string, string[]> = new Map<string, string[]>();
    private endpoint = 'wss://ws.finnhub.io?token=';

    private myWebSocket: WebSocketSubject<any>;
    private isConnectionInitialized$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private userStorageService: UserStorageService) {
        this.initConnection();
    }

    get isConnectionInitialized(): boolean {
        return this.isConnectionInitialized$.getValue();
    }

    isConnectionInitializedObs(): Observable<boolean> {
        return this.isConnectionInitialized$.asObservable();
    }

    getSubscribedSymbolsResult(): Observable<MarketSymbolResult> {
        if (!this.isConnectionInitialized$.value || !this.myWebSocket) {
            console.log('Websocket getSubscribedSymbolsResult return, no connection initialized');
            return of({s: 'NOT EXISTS', v: 0, p: 0, t: 0});
        }
        return this.myWebSocket.asObservable().pipe(
            filter(x => !!x),
            map(x => x.data as MarketSymbolResult[]),
            filter(x => !!x),
            //tap(x => console.log('res', x)),
            mergeAll(),
        );
    }

    createSubscribeForSymbol(componentName: string, symbol: string, isCrypto: boolean = false) {
        /*if (!this.isConnectionInitialized$.value || !this.myWebSocket) {
            console.log('Websocket createSubscribeForSymbol return, no connection initialized');
            return;
        }

        const neededSubscription = this.checkIfSubscriptionIsNeeded(symbol);
        this.saveSymbol(componentName, symbol);

        if (!neededSubscription) {
            return;
        }

        if (isCrypto) {
            symbol = 'BINANCE:' + ''.concat(...symbol.split('-')).toUpperCase() + 'T'; // ex. BINANCE:BTCUSDT
        }

        console.log(`Sending subscription for: ${symbol}`);
        this.myWebSocket.next({type: 'subscribe', symbol});*/
    }

    closeConnection(componentName: string) {
        if (!this.isConnectionInitialized$.value || !this.myWebSocket) {
            console.log('Websocket closeConnection return, no connection initialized');
            return;
        }
        const data = this.subscribedSymbols.get(componentName);
        if (!!data) {
            data.forEach(s => this.closeConnectionForSymbol(componentName, s));
            this.subscribedSymbols.delete(componentName);
            this.printSubscriptions();
        }
    }

    /**
     * First check if another component is subscribed for symbol. If not send unsubscribe message.
     */
    closeConnectionForSymbol(componentName: string, symbol: string) {
        if (!this.isConnectionInitialized$.value || !this.myWebSocket) {
            console.log('Websocket closeConnectionForSymbol return, no connection initialized');
            return;
        }

        if (this.subscribedSymbols.get(componentName)) {
            this.subscribedSymbols.set(componentName, this.subscribedSymbols.get(componentName).filter(s => s !== symbol));
        }

        let subscriptionExists = false;
        this.subscribedSymbols.forEach(symbols => {
            if (!subscriptionExists && symbols.includes(symbol)) {
                subscriptionExists = true;
            }
        });

        if (!subscriptionExists) {
            console.log(`Closing subscription for: ${symbol}`);
            this.myWebSocket.next({type: 'unsubscribe', symbol});
        }
    }

    private initConnection() {
        this.userStorageService.getUser().pipe(
            filter(x => !!x),
            map(x => x.userPrivateData.finnhubKey),
            distinctUntilChanged()
        ).subscribe(key => {
            console.log('User finhub token: ', key);
            this.myWebSocket = webSocket(this.endpoint + key);
            this.isConnectionInitialized$.next(true);
        });
    }

    /**
     * Return true if subscription is required. False if already subscribed for symbol
     */
    private checkIfSubscriptionIsNeeded(symbol: string): boolean {
        let result = true;
        this.subscribedSymbols.forEach((values, key) => {
            if (result && values.includes(symbol)) {
                console.log(`Already subscribing for symbol ${symbol}`);
                result = false;
            }
        });
        return result;
    }

    private saveSymbol(componentName: string, symbol: string): void {
        const savedSymbols = this.subscribedSymbols.get(componentName) || [];
        this.subscribedSymbols.set(componentName, [...savedSymbols, symbol]);
    }

    private printSubscriptions(): void {
        this.subscribedSymbols.forEach((v, k) => console.log(k, v));
        console.log('----------------------');
    }

}
