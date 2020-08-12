import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ChartDataIdentification, HistoricalChartData} from '../../../../../shared/models/chartModel';
import {Observable} from 'rxjs';
import {ChartDataService} from '../../../../../api/chart-data.service';

@Component({
  selector: 'app-financial-chart-card-modal-container',
  templateUrl: './financial-chart-card-modal-container.component.html',
  styleUrls: ['./financial-chart-card-modal-container.component.scss'],
})
export class FinancialChartCardModalContainerComponent implements OnInit {
  chartData$: Observable<HistoricalChartData>;

  chartDataIdentification: ChartDataIdentification;

  constructor(private navParams: NavParams,
              private modalController: ModalController,
              private chartDataService: ChartDataService) {
    this.chartDataIdentification = this.navParams.get('chartDataIdentification');
  }

  ngOnInit() {
    this.chartData$ = this.chartDataService.getHistoricalDataForSymbol(this.chartDataIdentification.symbol);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
