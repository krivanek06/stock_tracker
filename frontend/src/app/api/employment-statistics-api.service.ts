import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ChartData, EmploymentPartialData} from '../features/stock-data-feature/model/chartDataModel';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmploymentStatisticsApiService {
    private employmentURL = `${environment.stockAPI}/chart_data/employment_statistics`;
    constructor(private http: HttpClient) {
    }

    private static getCustomHttpParams(allData: boolean, numberOfDataSet: number): HttpParams {
      return new HttpParams()
            .set('numberOfDataSet', String(numberOfDataSet))
            .set('allData', String(allData));
    }

    getGoodsProducingIndustryData(allData: boolean = true): Observable<ChartData> {
        const params = EmploymentStatisticsApiService.getCustomHttpParams(allData, 40);
        return this.http.get<ChartData>(`${this.employmentURL}/goodsProducingIndustry`, {params});
    }

  getGovernmentIndustryData(allData: boolean = true): Observable<ChartData> {
    const params = EmploymentStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/governmentIndustry`, {params});
  }

  getPrivateIndustryData(allData: boolean = true): Observable<ChartData> {
    const params = EmploymentStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/privateIndustry`, {params});
  }

  getServiceProvidingIndustryData(allData: boolean = true): Observable<ChartData> {
    const params = EmploymentStatisticsApiService.getCustomHttpParams(allData, 40);
    return this.http.get<ChartData>(`${this.employmentURL}/serviceProvidingIndustry`, {params});
  }

  getPartialDataFromAllCategory(): Observable<EmploymentPartialData> {
    return this.http.get<EmploymentPartialData>(`${this.employmentURL}/partialDataFromAllCategory`);
  }


}
