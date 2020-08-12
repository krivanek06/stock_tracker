import {Injectable} from '@angular/core';
import {StockWatchlistModule} from '../features/stock-watchlist-feature/stock-watchlist.module';
import {
    HttpClient,
    HttpParams,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
    HistoricalChartData,
    ChartDataWrapper,
} from '../shared/models/chartModel';
import {environment} from '../../environments/environment';
import {map, retry, tap} from 'rxjs/operators';
import {EarningsCalendar, EarningsCalendarWrapper} from '../features/stock-data-feature/model/earningsCalendarModel';
import {NewsArticle, NewsArticleWrapper} from '../features/stock-data-feature/model/newsModel';
import {StockArticle, StockArticleWrapper, StockDetails} from '../features/stock-details-feature/model/stockDetails';
import {FinancialReport} from '../features/stock-details-feature/model/financialReportModel';
import {TopActive, TopCrypto, TopGains, TopLosers, TopStockTableData, TopTableData} from '../features/stock-data-feature/model/dataModel';

@Injectable({
    providedIn: 'root',
})
export class StockApiService {
    constructor(private http: HttpClient) {
    }



    getTopGains(): Observable<TopStockTableData[]> {
        return this.http
            .get<TopGains>(`${environment.stockAPI}/ticker/day_top_gains`)
            .pipe(
                map((res) => res.topGains),
                retry(2)
            );
    }

    getTopLosers(): Observable<TopStockTableData[]> {
        return this.http
            .get<TopLosers>(`${environment.stockAPI}/ticker/day_top_losers`)
            .pipe(
                map((res) => res.topLosers),
                retry(2)
            );
    }

    getTopActive(): Observable<TopStockTableData[]> {
        return this.http
            .get<TopActive>(`${environment.stockAPI}/ticker/day_most_active`)
            .pipe(
                map((res) => res.mostActive),
                retry(2)
            );
    }

    getTopCrypto(): Observable<TopTableData[]> {
        return this.http
            .get<TopCrypto>(`${environment.stockAPI}/ticker/day_top_cryto`)
            .pipe(
                map((res) => res.topCrypto),
                retry(2)
            );
    }

    getMarketNew(): Observable<NewsArticle[]> {
        return this.http
            .get<NewsArticleWrapper>(`${environment.stockAPI}/economics/news`)
            .pipe(
                map((res) => res.economicNews),
                retry(2)
            );
    }

    getEarningsCalendar(): Observable<EarningsCalendar[]> {
        return this.http
            .get<EarningsCalendarWrapper>(`${environment.stockAPI}/economics/earnings`)
            .pipe(map((res) => res.earnings));
    }


    getStockDetails(symbol: string): Observable<StockDetails> {
        const params = new HttpParams().set('symbol', symbol);
        return this.http.get<StockDetails>
        (`${environment.stockAPI}/ticker/details/fundamentals`, {params})
            .pipe(
                tap(res => console.log('eeeeeeee')),
            );
    }


    getFinancialReport(symbol: string, financialReportName: string): Observable<FinancialReport> {
        const params = new HttpParams()
            .set('symbol', symbol)
            .set('financialReportName', financialReportName);
        return this.http.get<FinancialReport>(`${environment.stockAPI}/ticker/details/financial_report`, {params});
    }
}
