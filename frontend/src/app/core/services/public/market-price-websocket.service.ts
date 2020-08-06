import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';

interface MarketSymbolResult {
    p: number;  // price
    s: string;  // source
    t: number;  // timestamp
    v: number; // volume
}

@Injectable({
    providedIn: 'root'
})
export class MarketPriceWebsocketService {
    private socket: WebSocket = new WebSocket(`wss://ws.finnhub.io?token=${environment.finnhubKEY}`);

    // contains subscribed symbols
    private subscribedSymbols: string[] = [];

    // contains last change price
    private subscription$: BehaviorSubject<MarketSymbolResult> = new BehaviorSubject<MarketSymbolResult>(null);


    constructor() {
        console.log('MarketPriceWebsocketService called');
        this.initialiseWebsocketConnection();
    }


    getSubscribedSymbolsResult(): Observable<MarketSymbolResult> {
        return this.subscription$.asObservable();
    }

    createSubscribeForSymbol(symbol: string) {
        if (!this.socket) {
            console.log('uninitialized websocket connection');
            this.initialiseWebsocketConnection();
        }
        if (this.subscribedSymbols.includes(symbol)) {
            console.log(`already subscribing for ${symbol}`);
            return;
        }

        this.subscribedSymbols = [...this.subscribedSymbols, symbol];
        console.log(' this.subscribedSymbols', this.subscribedSymbols);

        this.socket.addEventListener('open', () => {
            console.log('websocket sending subscription for symbol ', symbol);
            this.socket.send(JSON.stringify({type: 'subscribe', symbol}));
        });

    }


    private initialiseWebsocketConnection() {
        console.log('initialiseWebsocketConnection');
        // this.subscription$ = new BehaviorSubject<MarketSymbolResult>(null);
        // this.socket = new WebSocket(`wss://ws.finnhub.io?token=${environment.finnhubKEY}`);
        // this.subscribedSymbols = [];

        // if message arrive, emit behaviour subject
        this.socket.onmessage = (e) => {
            const result = JSON.parse(e.data)?.data as Array<MarketSymbolResult>;
            console.log(result);
            if (result && result.length > 0) {
                const marketSymbol = result[0] as MarketSymbolResult;
                this.subscription$.next(marketSymbol);
            }
        };

        // on close unsubscribe for all symbols
        this.socket.onclose = () => {
            this.subscribedSymbols.forEach(symbol => this.socket.send(JSON.stringify({type: 'unsubscribe', symbol})));
            console.log('closing websocket connection');
        };

    }


    closeConnection() {
        console.log('close websocket connection');
        this.subscribedSymbols = [];
        this.socket.close();
        /*this.subscription$.next(null);
        this.subscription$.complete();*/
    }
}
