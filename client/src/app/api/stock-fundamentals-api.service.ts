import {Injectable} from '@angular/core';
import {
    HttpClient,
    HttpParams,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, retry, tap} from 'rxjs/operators';
import {StockDetails} from '../features/stock-details-feature/model/stockDetails';
import {FinancialReport} from '../features/stock-details-feature/model/financialReportModel';

@Injectable({
    providedIn: 'root',
})
export class StockFundamentalsApiService {
    constructor(private http: HttpClient) {
    }


    getStockDetails(symbol: string): Observable<StockDetails> {
        const params = new HttpParams().set('symbol', symbol);
        return this.http.get<StockDetails>
        (`${environment.stockAPI}/fundamentals/all`, {params})
            .pipe(
                tap(res => console.log('eeeeeeee')),
            );
    }


    getFinancialReport(symbol: string, financialReportName: string): Observable<FinancialReport> {
        const params = new HttpParams()
            .set('symbol', symbol)
            .set('financialReportName', financialReportName);
        return this.http.get<FinancialReport>(`${environment.stockAPI}/fundamentals/financial_report`, {params});
    }
}
