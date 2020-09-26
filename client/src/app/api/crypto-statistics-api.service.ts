import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BitcoinPartialData, ChartData, SP500PartialData} from '../shared/models/chartDataModel';

@Injectable({
  providedIn: 'root'
})
export class CryptoStatisticsApiService {

  private employmentURL = `${environment.marketDataAPI}/chart_data/bitcoin_statistics`;
  constructor(private http: HttpClient) {
  }

  private static getCustomHttpParams(allData: boolean, numberOfDataSet: number): HttpParams {
    return new HttpParams()
        .set('numberOfDataSet', String(numberOfDataSet))
        .set('allData', String(allData));
  }

  getCostPerTransactionData(allData: boolean = true): Observable<ChartData> {
    const params = CryptoStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/costPerTransaction`, {params});
  }

  getExchangeTradingVolumeData(allData: boolean = true): Observable<ChartData> {
    const params = CryptoStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/exchangeTradingVolume`, {params});
  }

  getMarketCapData(allData: boolean = true): Observable<ChartData> {
    const params = CryptoStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/marketCap`, {params});
  }

  getMarketPriceData(allData: boolean = true): Observable<ChartData> {
    const params = CryptoStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/marketPrice`, {params});
  }

  getNumberOfTransactionsPerDayData(allData: boolean = true): Observable<ChartData> {
    const params = CryptoStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/numberOfTransactionsPerDay`, {params});
  }

  getTransactionFeesUSDData(allData: boolean = true): Observable<ChartData> {
    const params = CryptoStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/transactionFeesUSD`, {params});
  }

  getTransactionTimeUSDData(allData: boolean = true): Observable<ChartData> {
    const params = CryptoStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/transactionTime`, {params});
  }

  getPartialDataFromAllCategory(): Observable<BitcoinPartialData> {
    return this.http.get<BitcoinPartialData>(`${this.employmentURL}/partialDataFromAllCategory`);
  }



}
