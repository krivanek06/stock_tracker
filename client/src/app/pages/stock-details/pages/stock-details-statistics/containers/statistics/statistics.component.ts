import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HistoricalChartData} from "../../../../../../shared/models/chartDataModel";
import {ChartDataApiService} from "../../../../../../api/chart-data-api.service";
import {ModalController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {DetailsSummaryModalComponent} from "../../../../../../features/stock-details-feature/components/modal/details-summary-modal/details-summary-modal.component";
import {WatchlistPickerModalContainerComponent} from "../../../../../../features/stock-watchlist-feature/containers/watchlist-picker-modal-container/watchlist-picker-modal-container.component";
import {DetailsFinancialReportModalComponent} from "../../../../../../features/stock-details-feature/components/modal/details-financial-report-modal/details-financial-report-modal.component";
import {QueryStockDetailsQuery} from "../../../../../../api/customGraphql.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {

  @Input() stockDetails: QueryStockDetailsQuery;

  chartData$: Observable<HistoricalChartData>;
  symbol: string;

  constructor(private chartDataService: ChartDataApiService,
              private modalController: ModalController,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
    this.loadChartData();
  }

  loadChartData(period: string = '1y') {
    this.chartData$ = this.chartDataService.getHistoricalDataForSymbol(this.symbol, period);
  }

  async showSummary() {
    const modal = await this.modalController.create({
      component: DetailsSummaryModalComponent,
      componentProps: {
        summaryProfile: this.stockDetails.queryStockDetails.companyData.summaryProfile,
        symbol: this.symbol
      },
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }

  async showWatchlist() {
    const modal = await this.modalController.create({
      component: WatchlistPickerModalContainerComponent,
      componentProps: {symbol: this.symbol},
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }

  async showFinancialReport(financialReport: string) {
    const modal = await this.modalController.create({
      component: DetailsFinancialReportModalComponent,
      componentProps: {symbol: this.symbol, financialReport},
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }

}
