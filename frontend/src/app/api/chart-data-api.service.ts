import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, retry} from 'rxjs/operators';
import {
    HistoricalChartData, InvestorSentimentData, MiseryIndexData,
    TreasuryYieldCurveRatesData
} from '../features/stock-data-feature/model/chartDataModel';

@Injectable({
    providedIn: 'root'
})
export class ChartDataApiService {
    constructor(private http: HttpClient) {
    }

    getHistoricalDataForSymbol(symbol: string, period: string = '1d'): Observable<HistoricalChartData> {
        const params = new HttpParams().set('symbol', symbol).set('period', period);
        return this.http.get<any>(`${environment.stockAPI}/chart_data/historical_data`,
            {params}).pipe(
            map((res) => res.chartData as HistoricalChartData),
            retry(2)
        );
    }


    getInvestorSentiment(allData: boolean = false): Observable<InvestorSentimentData> {
        const numberOfDataSet = 40;
        const params = new HttpParams()
            .set('numberOfDataSet', String(numberOfDataSet))
            .set('allData', String(allData));
        return this.http.get<any>(`${environment.stockAPI}/chart_data/investor_sentiment`, {params}).pipe(
            map(res => res.chartData as InvestorSentimentData)
        );
    }

    getTreasuryYieldCurveRates(allData: boolean = false): Observable<TreasuryYieldCurveRatesData> {
        const numberOfDataSet = 250;
        const params = new HttpParams()
            .set('numberOfDataSet', String(numberOfDataSet))
            .set('allData', String(allData));
        return this.http.get<any>(`${environment.stockAPI}/chart_data/treasury_yield_curve_rates`, {params}).pipe(
            map(res => res.chartData as TreasuryYieldCurveRatesData)
        );
    }

    getMiseryIndex(allData: boolean = false): Observable<MiseryIndexData> {
        const numberOfDataSet = 40;
        const params = new HttpParams()
            .set('numberOfDataSet', String(numberOfDataSet))
            .set('allData', String(allData));
        return this.http.get<any>(`${environment.stockAPI}/chart_data/misery_index`, {params}).pipe(
            map(res => res.chartData as MiseryIndexData)
        );
    }


}
