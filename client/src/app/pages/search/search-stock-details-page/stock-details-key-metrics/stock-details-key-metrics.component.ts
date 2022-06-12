import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Period, StDetailsKeyMetricsFragment, SymbolStorageService } from '@core';
import { WindowService } from '@shared';
import { StockDetailsKeyMetricsDisplay } from '@stock-details-feature';
import { Observable } from 'rxjs';
import { PERIOD_TYPE } from 'src/app/pages/search/models/pages.model';

@Component({
  selector: 'app-stock-details-key-metrics',
  templateUrl: './stock-details-key-metrics.component.html',
  styleUrls: ['./stock-details-key-metrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsKeyMetricsComponent implements OnInit {
  stockDetailsKeyMetrics$!: Observable<StDetailsKeyMetricsFragment | null>;
  StockDetailsKeyMetricsDisplay = StockDetailsKeyMetricsDisplay;
  chartHeight!: number;
  PERIOD_TYPE = PERIOD_TYPE;
  activeStatement: Period = 'quarter';
  constructor(private symbolStorageService: SymbolStorageService) { }

  ngOnInit(): void {
    this.stockDetailsKeyMetrics$ = this.symbolStorageService.queryStockDetailsKeyMetrics();
    this.chartHeight = WindowService.getWindowHeightPrctInPx(22);
  }

  changeActiveStatement(event: any) {
    this.activeStatement = event.detail.value as Period;
    this.stockDetailsKeyMetrics$ = this.symbolStorageService.queryStockDetailsKeyMetrics(this.activeStatement);
  }

}
