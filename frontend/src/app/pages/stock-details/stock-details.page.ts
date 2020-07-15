import {Component, OnDestroy, OnInit} from '@angular/core';
import {StockApiService} from '../../features/stock-tracker/endpoints/stock-api.service';
import {Observable, Subject} from 'rxjs';
import { StockDetails} from '../../features/stock-tracker/model/stockDetails';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {TimelineChartData} from '../../shared/models/chartModel';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.page.html',
  styleUrls: ['./stock-details.page.scss'],
})
export class StockDetailsPage implements OnInit, OnDestroy  {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  chartData: TimelineChartData;
  stockDetails: StockDetails;


  constructor(private stockApiService: StockApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const symbol = this.route.snapshot.paramMap.get('symbol');

    this.stockApiService.getChartDataForSymbol(symbol, '1y').pipe(
        takeUntil(this.destroy$)
    ).subscribe(res => {
      this.chartData = res;
    });

    this.stockApiService.getStockDetails(symbol).pipe(
        takeUntil(this.destroy$)
    ).subscribe(res => {
      this.stockDetails = res;
      console.log(this.stockDetails);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
