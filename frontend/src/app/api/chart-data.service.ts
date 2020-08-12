import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  HistoricalChartData,
  ChartDataWrapper,
  EmploymentData,
  SP500StatisticsData,
  InvestorSentimentData, TreasuryYieldCurveRatesData, BitcoinData, MiseryIndexData
} from '../shared/models/chartModel';
import {environment} from '../../environments/environment';
import {map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) { }

  getHistoricalDataForSymbol(symbol: string, period: string = '1d'): Observable<HistoricalChartData> {
    const params = new HttpParams().set('symbol', symbol).set('period', period);
    return this.http.get<ChartDataWrapper>(`${environment.stockAPI}/chart_data/historical_data`,
            {params}).pipe(
            map((res) => res.chartData as HistoricalChartData),
            retry(2)
        );
  }

  getEmploymentData(): Observable<EmploymentData> {
    return this.http.get<ChartDataWrapper>(`${environment.stockAPI}/chart_data/employment_data`).pipe(
        map(res => res.chartData as EmploymentData)
    );
  }

  getSP500Statistics(): Observable<SP500StatisticsData> {
    return this.http.get<ChartDataWrapper>(`${environment.stockAPI}/chart_data/sp500_statistics`).pipe(
        map(res => res.chartData as SP500StatisticsData)
    );
  }

  getInvestorSentiment(): Observable<InvestorSentimentData> {
    return this.http.get<ChartDataWrapper>(`${environment.stockAPI}/chart_data/investor_sentiment`).pipe(
        map(res => res.chartData as InvestorSentimentData)
    );
  }

  getTreasuryYieldCurveRates(): Observable<TreasuryYieldCurveRatesData> {
    return this.http.get<ChartDataWrapper>(`${environment.stockAPI}/chart_data/treasury_yield_curve_rates`).pipe(
        map(res => res.chartData as TreasuryYieldCurveRatesData)
    );
  }

  getBitcoinData(): Observable<BitcoinData> {
    return this.http.get<ChartDataWrapper>(`${environment.stockAPI}/chart_data/bitcoin_data`).pipe(
        map(res => res.chartData as BitcoinData)
    );
  }

  getMiseryIndex(): Observable<MiseryIndexData> {
    return this.http.get<ChartDataWrapper>(`${environment.stockAPI}/chart_data/misery_index`).pipe(
        map(res => res.chartData as MiseryIndexData)
    );
  }



}
