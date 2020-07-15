import {Injectable} from '@angular/core';
import {StockTrackerModule} from '../stock-tracker.module';
import {
    HttpClient,
    HttpParams,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
    TimelineChartData,
    TimelineChartDataWrapper,
} from '../../../shared/models/chartModel';
import {environment} from '../../../../environments/environment';
import {map, retry, tap} from 'rxjs/operators';
import {
    StockTableData,
    StockWatchTableDataWrapper,
    TopActive,
    TopCrypto,
    TopGains,
    TopLosers,
    TopStockTableData,
    TopTableData,
} from '../model/tableModel';
import {EarningsCalendar, EarningsCalendarWrapper} from '../model/earningsCalendarModel';
import {NewsArticle, NewsArticleWrapper, StockNews, StockNewsWrapper} from '../model/newsModel';
import {StockDetails, StockDetailsWrapper} from '../model/stockDetails';

@Injectable({
    providedIn: StockTrackerModule,
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

    getStockTableData(symbol: string): Observable<StockTableData> {
        const params = new HttpParams().set('symbol', symbol);
        return this.http
            .get<StockWatchTableDataWrapper>(
                `${environment.stockAPI}/ticker/watchlist_summary`,
                {params}
            )
            .pipe(map((res) => res.stockTableData));
    }


    getStockDetails(symbol: string): Observable<StockDetails> {
        const params = new HttpParams().set('symbol', symbol);
        return this.http.get<StockDetailsWrapper>
        (`${environment.stockAPI}/ticker/details/fundamentals`, {params})
            .pipe(
                tap(res => console.log('eeeeeeee')),
                map(res => res.stockDetails)
            );
    }


    getStockNews(symbol: string): Observable<StockNews> {
        const params = new HttpParams().set('symbol', symbol);
        return this.http.get<StockNewsWrapper>(`${environment.stockAPI}/ticker/details/news`, {params})
            .pipe(
                tap(res => console.log('eeeeeeee')),
                map(res => res.stockNews)
            );
    }
}
