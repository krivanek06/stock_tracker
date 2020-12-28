import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {FinancialReport} from '../model/financialReportModel';
import {QueryStockDetailsGQL, QueryStockDetailsQuery, StockDetails, StockSummaryFragmentFragment} from '../../../api/customGraphql.service';

@Injectable({
    providedIn: 'root'
})
export class StockDetailsService {
    activeSymbol: string;

    constructor(private queryStockDetailsGQL: QueryStockDetailsGQL) {
    }


    getStockDetails(symbol: string = this.activeSymbol): Observable<StockDetails> {
        return this.queryStockDetailsGQL.fetch({
            symbol
        }).pipe(
            tap(x => console.log('getStockDetails', x)),
            map(res => res.data.queryStockDetails)
        );
    }


    /*getFinancialReport(symbol: string, financialReportName: string): Observable<FinancialReport> {
      const params = new HttpParams()
          .set('symbol', symbol)
          .set('financialReportName', financialReportName);
      return this.http.get<FinancialReport>(`${environment.marketDataAPI}/fundamentals/financial_report`, {params});
    }*/

}
