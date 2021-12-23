import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StDetailsFinancialGrowthFragment, SymbolStorageService } from '@core';
import { WindowService } from '@shared';
import { StockDetailsFinancialGrowthDisplay } from '@stock-details-feature';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-details-financial-growth',
  templateUrl: './stock-details-financial-growth.component.html',
  styleUrls: ['./stock-details-financial-growth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsFinancialGrowthComponent implements OnInit {
  stockDetailsFinancialGrowth$!: Observable<StDetailsFinancialGrowthFragment | null>;

  StockDetailsFinancialGrowthDisplay = StockDetailsFinancialGrowthDisplay;
  chartHeight!: number;

  constructor(private symbolStorageService: SymbolStorageService) { }

  ngOnInit(): void {
    this.stockDetailsFinancialGrowth$ = this.symbolStorageService.queryStockDetailsFinancialGrowth();
    this.chartHeight = WindowService.getWindowHeightPrctInPx(22);
  }

}
