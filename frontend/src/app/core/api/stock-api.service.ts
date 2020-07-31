import {Injectable} from '@angular/core';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {
    HttpClient,
    HttpParams,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
    TimelineChartData,
    TimelineChartDataWrapper,
} from '../../shared/models/chartModel';
import {environment} from '../../../environments/environment';
import {map, retry, tap} from 'rxjs/operators';
import {
    TopActive,
    TopCrypto,
    TopGains,
    TopLosers,
    TopStockTableData,
    TopTableData,
} from '../../features/stock-watchlist-feature/model/tableModel';
import {EarningsCalendar, EarningsCalendarWrapper} from '../../features/stock-tracker-feature/model/earningsCalendarModel';
import {NewsArticle, NewsArticleWrapper} from '../../features/stock-tracker-feature/model/newsModel';
import {StockArticle, StockArticleWrapper, StockDetails} from '../../features/stock-details-feature/model/stockDetails';
import {FinancialReport} from '../../features/stock-details-feature/model/financialReportModel';

@Injectable({
    providedIn: 'root',
})
export class StockApiService {
    constructor(private http: HttpClient) {
    }

    getChartDataForSymbol(
        symbol: string,
        period: string = '1d'
    ): Observable<TimelineChartData> {
        const params = new HttpParams().set('symbol', symbol).set('period', period);
        return this.http
            .get<TimelineChartDataWrapper>(
                `${environment.stockAPI}/ticker/chart_data`,
                {params}
            )
            .pipe(
                map((res) => res.chartData),
                retry(2)
            );
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

   /* getStockTableData(symbol: string): Observable<StockTableData> {
        const params = new HttpParams().set('symbol', symbol);
        return this.http
            .get<StockWatchTableDataWrapper>(
                `${environment.stockAPI}/ticker/watchlist_summary`,
                {params}
            )
            .pipe(map((res) => res.stockTableData));
    }*/


    getStockDetails(symbol: string): Observable<StockDetails> {
        const params = new HttpParams().set('symbol', symbol);
        return this.http.get<StockDetails>
        (`${environment.stockAPI}/ticker/details/fundamentals`, {params})
            .pipe(
                tap(res => console.log('eeeeeeee')),
            );
    }


    getStockNews(symbol: string, olderThan: number): Observable<StockArticle[]> {
        const params = new HttpParams()
            .set('symbol', symbol)
            .set('olderThan', String(olderThan));
        return this.http.get<StockArticleWrapper>(`${environment.stockAPI}/ticker/details/stockNews`, {params})
            .pipe(
                tap(res => console.log('eeeeeeee')),
                map(res => res.stockNews)
            );
    }


    getFinancialReport(symbol: string, financialReportName: string): Observable<FinancialReport>{
        const params = new HttpParams()
            .set('symbol', symbol)
            .set('financialReportName', financialReportName);
        return this.http.get<FinancialReport>(`${environment.stockAPI}/ticker/details/financial_report`,{params});
    }
}
