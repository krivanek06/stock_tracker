import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {distinctUntilChanged, map, retry} from 'rxjs/operators';
import {NewsArticle, NewsArticleWrapper} from '../features/stock-data-feature/model/newsModel';
import {HttpClient, HttpParams} from '@angular/common/http';
import {
    EarningsCalendar,
    EarningsCalendarWrapper, SearchStocks,
    SymbolMovementData,
    SymbolMovementWrapper
} from '../shared/models/chartDataModel';

@Injectable({
    providedIn: 'root'
})
export class SearchDataApiService {

    constructor(private http: HttpClient) {
    }

    getTopGains(): Observable<SymbolMovementData[]> {
        return this.http
            .get<SymbolMovementWrapper>(`${environment.stockAPI}/search/day_top_gains`)
            .pipe(
                map((res) => res.data),
                retry(2)
            );
    }

    getTopLosers(): Observable<SymbolMovementData[]> {
        return this.http
            .get<SymbolMovementWrapper>(`${environment.stockAPI}/search/day_top_losers`)
            .pipe(
                map((res) => res.data),
                retry(2)
            );
    }

    getTopActive(): Observable<SymbolMovementData[]> {
        return this.http
            .get<SymbolMovementWrapper>(`${environment.stockAPI}/search/day_most_active`)
            .pipe(
                map((res) => res.data),
                retry(2)
            );
    }

    getTopCrypto(): Observable<SymbolMovementData[]> {
        return this.http
            .get<SymbolMovementWrapper>(`${environment.stockAPI}/search/day_top_cryto`)
            .pipe(
                map((res) => res.data),
                retry(2)
            );
    }

    getMarketNew(): Observable<NewsArticle[]> {
        return this.http
            .get<NewsArticleWrapper>(`${environment.stockAPI}/search/news`)
            .pipe(
                map((res) => res.economicNews),
                retry(2)
            );
    }

    getEarningsCalendar(): Observable<EarningsCalendar[]> {
        return this.http
            .get<EarningsCalendarWrapper>(`${environment.stockAPI}/search/earnings`)
            .pipe(map((res) => res.earnings));
    }

    searchStockSymbol(prefix: string): Observable<SearchStocks[]> {
        const params = new HttpParams().set('symbol', prefix);
        return this.http.get<any>(`${environment.stockAPI}/search/search_symbol`, {params}).pipe(
            map(res => res.data as SearchStocks[]),
            distinctUntilChanged()
        );
    }
}