import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChartData, SP500PartialData} from '../shared/models/chartDataModel';

@Injectable({
  providedIn: 'root'
})
export class Sp500StatisticsApiService {

  private employmentURL = `${environment.stockAPI}/chart_data/sp500_statistics`;
  constructor(private http: HttpClient) {
  }

  private static getCustomHttpParams(allData: boolean, numberOfDataSet: number): HttpParams {
    return new HttpParams()
        .set('numberOfDataSet', String(numberOfDataSet))
        .set('allData', String(allData));
  }

  getPriceToSaleData(allData: boolean = true): Observable<ChartData> {
    const params = Sp500StatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/priceToSale`, {params});
  }

  getBookValueData(allData: boolean = true): Observable<ChartData> {
    const params = Sp500StatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/bookValue`, {params});
  }

  getSalesGrowthData(allData: boolean = true): Observable<ChartData> {
    const params = Sp500StatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/salesGrowth`, {params});
  }

  getDividendsData(allData: boolean = true): Observable<ChartData> {
    const params = Sp500StatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/dividend`, {params});
  }

  getPriceToBookData(allData: boolean = true): Observable<ChartData> {
    const params = Sp500StatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/priceToBook`, {params});
  }

  getEarningsYieldData(allData: boolean = true): Observable<ChartData> {
    const params = Sp500StatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/earningsYield`, {params});
  }

  getDividendYieldData(allData: boolean = true): Observable<ChartData> {
    const params = Sp500StatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/dividendYield`, {params});
  }

  getPeRatioData(allData: boolean = true): Observable<ChartData> {
    const params = Sp500StatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/peRatio`, {params});
  }

  getPartialDataFromAllCategory(): Observable<SP500PartialData> {
    return this.http.get<SP500PartialData>(`${this.employmentURL}/partialDataFromAllCategory`);
  }

}
