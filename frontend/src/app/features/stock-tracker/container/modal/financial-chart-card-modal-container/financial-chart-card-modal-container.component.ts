import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavParams, PopoverController} from '@ionic/angular';
import {ChartDataIdentification, TimelineChartData} from '../../../../../shared/models/chartModel';
import {StockApiService} from '../../../endpoints/stock-api.service';
import {FinancialChartComponent} from '../../../../../shared/components/financial-chart/financial-chart.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-financial-chart-card-modal-container',
  templateUrl: './financial-chart-card-modal-container.component.html',
  styleUrls: ['./financial-chart-card-modal-container.component.scss'],
})
export class FinancialChartCardModalContainerComponent implements OnInit {
  @ViewChild('myChart') myChart: FinancialChartComponent;

  chartData$: Observable<TimelineChartData>;

  chartDataIdentification: ChartDataIdentification;

  constructor(private navParams: NavParams,
              private popoverController: PopoverController,
              private stockAPI: StockApiService) {
    this.chartDataIdentification = this.navParams.get('chartDataIdentification');
  }

  ngOnInit() {
    this.chartData$ = this.stockAPI.getChartDataForSymbol(this.chartDataIdentification.symbol);
  }

  dismissModal() {
    this.popoverController.dismiss();
  }

}
