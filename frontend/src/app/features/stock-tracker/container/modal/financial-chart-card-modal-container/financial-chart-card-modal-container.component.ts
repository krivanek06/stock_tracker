import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ChartDataIdentification} from '../../../../../shared/model/chartModel';

@Component({
  selector: 'app-financial-chart-card-modal-container',
  templateUrl: './financial-chart-card-modal-container.component.html',
  styleUrls: ['./financial-chart-card-modal-container.component.scss'],
})
export class FinancialChartCardModalContainerComponent implements OnInit {
  chartDataIdentification: ChartDataIdentification;

  constructor(private navParams: NavParams,
              private viewCtrl: ModalController) {
    this.chartDataIdentification = this.navParams.get('chartDataIdentification');
  }

  ngOnInit() {}

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
