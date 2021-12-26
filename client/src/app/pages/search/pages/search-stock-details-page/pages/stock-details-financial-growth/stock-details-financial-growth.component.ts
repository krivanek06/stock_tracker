import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Period, StDetailsFinancialGrowthFragment, SymbolStorageService } from '@core';
import { WindowService } from '@shared';
import { StockDetailsFinancialGrowthDisplay } from '@stock-details-feature';
import { Observable } from 'rxjs';
import { PERIOD_TYPE } from '../../../../models/pages.model';

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
  activeStatement: Period = 'quarter';
  PERIOD_TYPE = PERIOD_TYPE;

  constructor(private symbolStorageService: SymbolStorageService) { }

  ngOnInit(): void {
    this.stockDetailsFinancialGrowth$ = this.symbolStorageService.queryStockDetailsFinancialGrowth();
    this.chartHeight = WindowService.getWindowHeightPrctInPx(26);
  }

  changeActiveStatement(event: any) {
    this.activeStatement = event.detail.value as Period;
    this.stockDetailsFinancialGrowth$ = this.symbolStorageService.queryStockDetailsFinancialGrowth(this.activeStatement);
  }

}
