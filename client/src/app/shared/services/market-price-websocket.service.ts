import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {filter, switchMap} from 'rxjs/operators';
import {StUserPublicData} from '../../api/customGraphql.service';

export interface MarketSymbolResult {
    p: number;  // price
    s: string;  // source
    t: number;  // timestamp
    v: number; // volume
}

@Injectable({
    providedIn: 'root'
})
export class MarketPriceWebsocketService {
    private socket: WebSocket;

    // contains subscribed symbols
    private subscribedSymbols: string[] = [];

    // contains last change price
    private subscription$: BehaviorSubject<MarketSymbolResult> = new BehaviorSubject<MarketSymbolResult>(null);

    // prevent multiple initializations
    private tryingToCreateSubscribeForSymbol = false;

    // one component cannot send request until another component's ngOndestroy closed connection
    private isConnected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(private authFeatureService: AuthFeatureService) {
        console.log('MarketPriceWebsocketService called');
        this.authFeatureService.getUser().pipe(
            filter(user => !!user && !!user.userPrivateData && !!user.userPrivateData.finnhubKey)
        ).subscribe(user => this.initialiseWebsocketConnection(user));
    }

    getIsConnected(): Observable<boolean> {
        return this.isConnected$.asObservable();
    }


    getSubscribedSymbolsResult(): Observable<MarketSymbolResult> {
        return this.subscription$.asObservable();
    }

    /**
     * Will initialise socket if does not exists
     * @param symbol to receive up to date data
     */
    async createSubscribeForSymbol(symbol: string) {
        this.tryingToCreateSubscribeForSymbol = true;
        this.isConnected$.next(true);

        if (this.subscribedSymbols.includes(symbol)) {
            console.log(`already subscribing for ${symbol}`);
            return;
        }

        this.subscribedSymbols = [...this.subscribedSymbols, symbol];

        while (!this.socket || this.socket.readyState !== 1) {
            if (!this.tryingToCreateSubscribeForSymbol) {
                console.log('exiting while loop in createSubscribeForSymbol');
                return;
            }
            console.log('waiting for websocket inicialization');
            await this.sleep(10000);
        }

        console.log('websocket sending subscription for symbol ', symbol);
        this.socket.send(JSON.stringify({type: 'subscribe', symbol}));


    }

    /**
     * Call each time a components is destroyed
     */
    closeConnection() {
        console.log('close websocket connection');
        this.tryingToCreateSubscribeForSymbol = false;
        if (!!this.socket && this.socket.readyState === 1) {
            this.subscribedSymbols.forEach(symbol => this.socket.send(JSON.stringify({type: 'unsubscribe', symbol})));
        }
        this.subscribedSymbols = [];
        // this.socket.close();
        this.subscription$.next(null);
        this.isConnected$.next(false);
        /*this.subscription$.complete();*/
    }

    closeConnectionForSymbol(symbol: string) {
        if (!this.socket || this.socket.readyState !== 1 || !this.subscribedSymbols.includes(symbol)) {
            console.log(`webocket connection for ${symbol} was already closed`);
            return;
        }

        this.socket.send(JSON.stringify({type: 'unsubscribe', symbol}));
        this.subscribedSymbols = this.subscribedSymbols.filter(s => s !== symbol);
    }

    private sleep(ms): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // this should execute only once
    private initialiseWebsocketConnection(user: StUserPublicData) {
        console.log(`initialise Websocket Connection with user: ${user}`);

        if (!!this.socket && this.socket.readyState === 1) {
            console.log('websockets ready state 1, no need to initialise');
            return;
        }

        this.socket = new WebSocket(`wss://ws.finnhub.io?token=${user.userPrivateData.finnhubKey}`);

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
            this.tryingToCreateSubscribeForSymbol = false;
            this.subscribedSymbols.forEach(symbol => this.socket.send(JSON.stringify({type: 'unsubscribe', symbol})));
            console.log('Unsubscribed for symbols. Socket is closed');
        };

        this.socket.onerror = (err) => {
            console.error('Socket encountered error: ', err.type, 'Reconnect in 1s');

            /* setTimeout(() => {
                 this.initialiseWebsocketConnection();
             }, 1000);*/
        };
        console.log('Websocket initialisation done');

    }


}
