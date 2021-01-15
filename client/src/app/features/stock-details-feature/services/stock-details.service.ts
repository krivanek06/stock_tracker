import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {FinancialReport} from '../model/financialReportModel';
import {
    QueryStockDailyInformationGQL,
    QueryStockDetailsGQL,
    QueryStockDetailsQuery,
    QueryStockSummariesGQL, QueryStockSummaryGQL,
    StockDetails,
    StockSummaryFragmentFragment, StStockDailyInformations, Summary
} from '../../../api/customGraphql.service';

@Injectable({
    providedIn: 'root'
})
export class StockDetailsService {
    activeSymbol: string;

    constructor(private queryStockDetailsGQL: QueryStockDetailsGQL,
                private queryStockSummaryGQL: QueryStockSummaryGQL,
                private queryStockDailyInformationGQL: QueryStockDailyInformationGQL) {
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

    getStockDailyInformation(): Observable<StStockDailyInformations> {
        return this.queryStockDailyInformationGQL.fetch().pipe(map(res => res.data.queryStockDailyInformation));
    }


    /*getFinancialReport(symbol: string, financialReportName: string): Observable<FinancialReport> {
      const params = new HttpParams()
          .set('symbol', symbol)
          .set('financialReportName', financialReportName);
      return this.http.get<FinancialReport>(`${environment.marketDataAPI}/fundamentals/financial_report`, {params});
    }*/

}
