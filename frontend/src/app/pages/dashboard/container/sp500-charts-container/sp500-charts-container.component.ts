import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SP500PartialData} from '../../../../features/stock-data-feature/model/chartDataModel';
import {Sp500StatisticsApiService} from '../../../../api/sp500-statistics-api.service';

@Component({
  selector: 'app-sp500-charts-container',
  templateUrl: './sp500-charts-container.component.html',
  styleUrls: ['./sp500-charts-container.component.scss'],
})
export class Sp500ChartsContainerComponent implements OnInit {
  sp500StatisticsData$: Observable<SP500PartialData>;
  constructor(private sp500StatisticsApiService: Sp500StatisticsApiService) { }

  ngOnInit() {
    this.sp500StatisticsData$ = this.sp500StatisticsApiService.getPartialDataFromAllCategory();
    this.sp500StatisticsData$.subscribe(x => console.log('sp 500', x));
  }

}
