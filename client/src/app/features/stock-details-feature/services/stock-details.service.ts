import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {StockDetails} from "../model/stockDetails";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map, tap} from "rxjs/operators";
import {FinancialReport} from "../model/financialReportModel";
import {QueryStockDetailsGQL, QueryStockDetailsQuery} from "../../../api/customGraphql.service";

@Injectable({
  providedIn: 'root'
})
export class StockDetailsService {

  constructor(private http: HttpClient,
              private queryStockDetailsGQL: QueryStockDetailsGQL) { }



  getStockDetails(symbol: string): Observable<QueryStockDetailsQuery> {
    return this.queryStockDetailsGQL.fetch({
      symbol
    }).pipe(
        tap(x => console.log('getStockDetails', x)),
        map(res => res.data)
    );
  }


  getFinancialReport(symbol: string, financialReportName: string): Observable<FinancialReport> {
    const params = new HttpParams()
        .set('symbol', symbol)
        .set('financialReportName', financialReportName);
    return this.http.get<FinancialReport>(`${environment.stockAPI}/fundamentals/financial_report`, {params});
  }

}
