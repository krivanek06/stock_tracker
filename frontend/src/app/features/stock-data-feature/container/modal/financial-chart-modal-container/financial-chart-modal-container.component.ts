import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ChartDataIdentification} from '../../../../../shared/models/sharedModel';
import {Observable} from 'rxjs';
import {ChartDataApiService} from '../../../../../api/chart-data-api.service';
import {HistoricalChartData} from '../../../model/chartDataModel';

@Component({
  selector: 'app-financial-chart-modal-container',
  templateUrl: './financial-chart-modal-container.component.html',
  styleUrls: ['./financial-chart-modal-container.component.scss'],
})
export class FinancialChartModalContainerComponent implements OnInit {
  chartData$: Observable<HistoricalChartData>;

  chartDataIdentification: ChartDataIdentification;

  constructor(private navParams: NavParams,
              private modalController: ModalController,
              private chartDataService: ChartDataApiService) {
    this.chartDataIdentification = this.navParams.get('chartDataIdentification');
  }

  ngOnInit() {
    this.chartData$ = this.chartDataService.getHistoricalDataForSymbol(this.chartDataIdentification.symbol);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
