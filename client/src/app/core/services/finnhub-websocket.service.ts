import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { distinctUntilChanged, filter, map, mergeAll, take, tap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MarketSymbolResult } from '../model';
import { UserStorageService } from './storage/user-storage.service';

interface SubscribedSymbols {
	componentName: string;
	symbols: string[];
	subscriptionExists: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class FinnhubWebsocketService {
	private subscribedSymbols$: BehaviorSubject<SubscribedSymbols[]> = new BehaviorSubject([]);
	private endpoint = 'wss://ws.finnhub.io?token=';
	private myWebSocket: WebSocketSubject<any>;
	private isConnectionInitialized$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private userStorageService: UserStorageService) {
		this.initConnection();
	}

	get isConnectionInitialized(): boolean {
		return this.isConnectionInitialized$.getValue();
	}

	get subscribedSymbols(): SubscribedSymbols[] {
		return this.subscribedSymbols$.value;
	}

	doesSubscriptionForComponentExists(componentName: string): Observable<boolean> {
		return this.subscribedSymbols$.asObservable().pipe(
			map((subscribedSymbols) => {
				const component = subscribedSymbols.find((subscribedSymbol) => subscribedSymbol.componentName === componentName);
				return component?.subscriptionExists;
			})
		);
	}

	isConnectionInitializedObs(): Observable<boolean> {
		return this.isConnectionInitialized$.asObservable();
	}

	getSubscribedSymbolsResult(): Observable<MarketSymbolResult> {
		if (!this.isConnectionInitialized$.value || !this.myWebSocket) {
			console.log('Websocket getSubscribedSymbolsResult return, no connection initialized');
			return of({ s: 'NOT EXISTS', v: 0, p: 0, t: 0 });
		}
		return this.myWebSocket.asObservable().pipe(
			filter((x) => !!x),
			map((x) => x.data as MarketSymbolResult[]),
			filter((x) => !!x),
			// tap((x) => console.log('res', x)),
			tap((x) => {
				// can happen that we will still receive updates for symbols which are not subscribed
				x.forEach((element: MarketSymbolResult) => this.unsubscribeForSymbol(element.s));
			}),
			mergeAll()
		);
	}

	async createSubscribeForSymbol(componentName: string, symbol: string, isCrypto: boolean = false): Promise<void> {
		if (!this.isConnectionInitialized$.value || !this.myWebSocket) {
			console.log('Websocket createSubscribeForSymbol return, no connection initialized');
			return;
		}

		if (isCrypto) {
			symbol = 'BINANCE:' + ''.concat(...symbol.split('-')).toUpperCase() + 'T'; // ex. BINANCE:BTCUSDT
		}

		this.saveSymbol(componentName, symbol);

		// sleep before creating subscription - wait till unsubscribed from previous page
		await this.sleep(4000);

		// send subscription multiple times - endpoint may not react on first time
		timer(2000, 3000)
			.pipe(take(3))
			.subscribe(() => {
				// set 'subscriptionExists' for component to true
				const subscribedSymbols = this.subscribedSymbols$.value;
				const component = subscribedSymbols.find((s) => s.componentName === componentName);
				if (component && this.checkIfSubscribed(symbol)) {
					console.log(`Sending subscription for: ${symbol}`);
					this.myWebSocket.next({ type: 'subscribe', symbol });

					component.subscriptionExists = true;
					this.subscribedSymbols$.next(subscribedSymbols);
				}
			});
	}

	closeConnection(componentName: string) {
		console.log(`Closing connection for component ${componentName}`);
		const data = this.subscribedSymbols.find((x) => x.componentName === componentName);
		if (!!data) {
			console.log(`Closing subscription for:`, data);

			const filteredSubscribedSymbols = this.subscribedSymbols$.value.filter((x) => x.componentName !== componentName);
			this.subscribedSymbols$.next(filteredSubscribedSymbols);

			data.symbols.forEach((symbol) => this.unsubscribeForSymbol(symbol));
			this.printSubscriptions();
		}
	}

	private unsubscribeForSymbol(symbol: string): void {
		if (!this.isConnectionInitialized$.value || !this.myWebSocket) {
			console.log('Websocket closeConnection return, no connection initialized');
			return;
		}

		if (!this.checkIfSubscribed(symbol)) {
			console.log(`unsubscribe for ${symbol}`);
			this.myWebSocket.next({ type: 'unsubscribe', symbol });
		}
	}

	private initConnection() {
		this.userStorageService
			.getUser()
			.pipe(
				filter((x) => !!x),
				map((x) => x.userPrivateData.finnhubKey),
				filter((token) => !!token),
				distinctUntilChanged()
			)
			.subscribe((key) => {
				console.log('User finhub token: ', key);
				this.myWebSocket = webSocket(this.endpoint + key);
				this.isConnectionInitialized$.next(true);
			});
	}

	/**
	 * Return true if subscription exists
	 */
	private checkIfSubscribed(symbol: string): boolean {
		return this.subscribedSymbols
			.map((s) => s.symbols)
			.reduce((acc, val) => acc.concat(val), [])
			.includes(symbol);
	}

	private saveSymbol(componentName: string, symbol: string): void {
		const subscribedSymbols = this.subscribedSymbols$.value;
		const subscribedSymbolComponent = subscribedSymbols.find((x) => x.componentName === componentName);
		if (!!subscribedSymbolComponent) {
			// already exists
			subscribedSymbolComponent.symbols = [...subscribedSymbolComponent.symbols, symbol];
			this.subscribedSymbols$.next(subscribedSymbols);
		} else {
			// first symbol for component
			const subscribedSymbol: SubscribedSymbols = {
				componentName,
				subscriptionExists: false,
				symbols: [symbol],
			};
			this.subscribedSymbols$.next([...subscribedSymbols, subscribedSymbol]);
		}
	}

	private printSubscriptions(): void {
		this.subscribedSymbols.forEach((subscribedSymbol) => console.log(subscribedSymbol));
		console.log('----------------------');
	}

	private sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
