import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {
    QueryStockDetailsGQL, QueryStockSummaryGQL,
    StockDetails, Summary
} from '../../../api/customGraphql.service';

@Injectable({
    providedIn: 'root'
})
export class StockDetailsService {
    activeSymbol: string;

    constructor(private queryStockDetailsGQL: QueryStockDetailsGQL,
                private queryStockSummaryGQL: QueryStockSummaryGQL) {
    }


    getStockDetails(symbol: string = this.activeSymbol): Observable<StockDetails> {
        return this.queryStockDetailsGQL.fetch({
            symbol
        }).pipe(map(res => res.data.queryStockDetails));
    }

    getStockSummary(symbol: string = this.activeSymbol): Observable<Summary> {
        return this.queryStockSummaryGQL.fetch({
            symbol
        }).pipe(map(res => res.data.queryStockSummary));
    }

}
