import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, retry} from 'rxjs/operators';
import {
    ChartData,
    ChartDataArray,
    HistoricalChartData
} from '../shared/models/chartDataModel';

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


    getInvestorSentiment(): Observable<ChartDataArray[]> {
        const numberOfDataSet = 40;
        const params = new HttpParams().set('numberOfDataSet', String(numberOfDataSet));
        return this.http.get<ChartData>(`${environment.marketDataAPI}/chart_data/investor_sentiment`, {params}).pipe(
            map(res => res.result)
        );
    }

    getTreasuryYieldCurveRates(): Observable<ChartDataArray[]> {
        const numberOfDataSet = 250;
        const params = new HttpParams().set('numberOfDataSet', String(numberOfDataSet));
        return this.http.get<ChartData>(`${environment.marketDataAPI}/chart_data/treasury_yield_curve_rates`, {params}).pipe(
            map(res => res.result)
        );
    }

    getMiseryIndex(): Observable<ChartDataArray[]> {
        const numberOfDataSet = 40;
        const params = new HttpParams().set('numberOfDataSet', String(numberOfDataSet));
        return this.http.get<ChartData>(`${environment.marketDataAPI}/chart_data/misery_index`, {params}).pipe(
            map(res => res.result)
        );
    }


}
