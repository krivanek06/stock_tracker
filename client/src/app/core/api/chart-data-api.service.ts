import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {retry} from 'rxjs/operators';
import {HistoricalChartData} from '../model/chartDataModel';

@Injectable({
    providedIn: 'root'
})
export class ChartDataApiService {
    constructor(private http: HttpClient) {
    }

    getHistoricalDataForSymbol(symbol: string, period: string = '1d'): Observable<HistoricalChartData> {
        const params = new HttpParams().set('symbol', symbol).set('period', period);
        return this.http.get<HistoricalChartData>(`${environment.marketDataAPI}/chart_data/historical_data`,
            {params}).pipe(
            retry(2)
        );
    }
}
