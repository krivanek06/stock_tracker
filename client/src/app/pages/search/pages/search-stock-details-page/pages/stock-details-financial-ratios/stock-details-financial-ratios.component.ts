import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StDetailsFinancialRatiosFragment, SymbolStorageService } from '@core';
import { WindowService } from '@shared';
import { StockDetailsFinancialRatiosDisplay } from '@stock-details-feature';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-details-financial-ratios',
  templateUrl: './stock-details-financial-ratios.component.html',
  styleUrls: ['./stock-details-financial-ratios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsFinancialRatiosComponent implements OnInit {
  stockDetailsFinancialRatios$!: Observable<StDetailsFinancialRatiosFragment | null>
  chartHeight!: number;

  StockDetailsFinancialRatiosDisplay = StockDetailsFinancialRatiosDisplay;
  constructor(private symbolStorageService: SymbolStorageService) { }

  ngOnInit(): void {
    this.stockDetailsFinancialRatios$ = this.symbolStorageService.queryStockDetailsFinancialRatios();
    this.chartHeight = WindowService.getWindowHeightPrctInPx(22);
  }

}
