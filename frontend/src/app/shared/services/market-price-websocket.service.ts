import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
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

    // prevent multiple initializations
    private isSocketInitialized = true;


    constructor() {
        console.log('MarketPriceWebsocketService called');
        this.initialiseWebsocketConnection();
    }


    getSubscribedSymbolsResult(): Observable<MarketSymbolResult> {
        return this.subscription$.asObservable();
    }

    /**
     * Will initialise socket if does not exists
     * @param symbol to receive up to date data
     */
    async createSubscribeForSymbol(symbol: string) {
        if (!this.isSocketInitialized) {
            this.initialiseWebsocketConnection();
        }

        while (!this.socket || this.socket.readyState !== 1) {
            console.log('waiting for websocket inicialization');
            await this.sleep(10000);
        }

        if (this.subscribedSymbols.includes(symbol)) {
            console.log(`already subscribing for ${symbol}`);
            return;
        }

        this.subscribedSymbols = [...this.subscribedSymbols, symbol];

        console.log('websocket sending subscription for symbol ', symbol);
        this.socket.send(JSON.stringify({type: 'subscribe', symbol}));


    }

    /**
     * Call each time a components is destroyed
     */
    closeConnection() {
        console.log('close websocket connection');
        this.subscribedSymbols = [];
        this.socket.close();
        this.subscription$.next(null);
        /*this.subscription$.complete();*/
    }

    private sleep(ms): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    private initialiseWebsocketConnection() {
        this.isSocketInitialized = true;
        if (this.socket.readyState === 1) {
            console.log('websockets ready state 1, no need to initialise');
            return;
        }
        console.log('initialise Websocket Connection');
        this.socket = new WebSocket(`wss://ws.finnhub.io?token=${environment.finnhubKEY}`);


        this.socket.onopen = (e) => {
            console.log('websocket open');
        };

        // if message arrive, emit behaviour subject
        this.socket.onmessage = (e) => {
            const result = JSON.parse(e.data)?.data as Array<MarketSymbolResult>;
            if (result && result.length > 0) {
                const marketSymbol = result[0] as MarketSymbolResult;
                this.subscription$.next(marketSymbol);
            }
        };

        // on close unsubscribe for all symbols
        this.socket.onclose = () => {
            this.isSocketInitialized = false;
            this.subscribedSymbols.forEach(symbol => this.socket.send(JSON.stringify({type: 'unsubscribe', symbol})));
            console.log('Unsubscribed for symbols. Socket is closed');

        };

        this.socket.onerror = (err) => {
            console.error('Socket encountered error: ', err.type, 'Reconnect in 1s');

            setTimeout(() => {
                this.initialiseWebsocketConnection();
            }, 1000);
        };

    }


}
