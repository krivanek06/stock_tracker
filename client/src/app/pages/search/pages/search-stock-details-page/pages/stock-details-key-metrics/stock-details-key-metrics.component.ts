import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StDetailsKeyMetricsFragment, SymbolStorageService } from '@core';
import { WindowService } from '@shared';
import { StockDetailsKeyMetricsDisplay } from '@stock-details-feature';
import { Observable } from 'rxjs';

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
  constructor(private symbolStorageService: SymbolStorageService) { }

  ngOnInit(): void {
    this.stockDetailsKeyMetrics$ = this.symbolStorageService.queryStockDetailsKeyMetrics();
    this.chartHeight = WindowService.getWindowHeightPrctInPx(22);
  }

}
