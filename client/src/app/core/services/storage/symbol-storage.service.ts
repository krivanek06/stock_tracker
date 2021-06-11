import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QueryStockDetailsGQL, QueryStockSummaryGQL, StockDetails, Summary} from '../../graphql-schema';

@Injectable({
    providedIn: 'root'
})
export class SymbolStorageService {
    private activeSymbol$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(private queryStockDetailsGQL: QueryStockDetailsGQL,
                private queryStockSummaryGQL: QueryStockSummaryGQL) {
    }

    get activeSymbol(): string {
        return this.activeSymbol$.getValue();
    }

    getActiveSymbol(): Observable<string> {
        return this.activeSymbol$.asObservable();
    }

    setActiveSymbol(symbol: string) {
        this.activeSymbol$.next(symbol);
    }


    getStockDetails(symbol: string = this.activeSymbol): Observable<StockDetails> {
        return this.queryStockDetailsGQL.fetch({
            symbol
        }).pipe(map(res => res.data.queryStockDetails));
    }

    reloadStockDetails(symbol: string = this.activeSymbol) {
        return this.queryStockDetailsGQL.fetch({
            symbol,
            reload: true
        }, {
            fetchPolicy: 'network-only'
        }).pipe(map(res => res.data.queryStockDetails));
    }

    getStockSummary(symbol: string = this.activeSymbol): Observable<Summary> {
        return this.queryStockSummaryGQL.fetch({
            symbol
        }).pipe(map(res => res.data.queryStockSummary));
    }

}
