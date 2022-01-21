import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Period, StDetailsFinancialRatiosFragment, SymbolStorageService } from '@core';
import { WindowService } from '@shared';
import { StockDetailsFinancialRatiosDisplay } from '@stock-details-feature';
import { Observable } from 'rxjs';
import { PERIOD_TYPE } from '../../models/pages.model';

@Component({
	selector: 'app-stock-details-financial-ratios',
	templateUrl: './stock-details-financial-ratios.component.html',
	styleUrls: ['./stock-details-financial-ratios.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailsFinancialRatiosComponent implements OnInit {
	stockDetailsFinancialRatios$!: Observable<StDetailsFinancialRatiosFragment | null>;
	chartHeight!: number;
	activeStatement: Period = 'quarter';
	StockDetailsFinancialRatiosDisplay = StockDetailsFinancialRatiosDisplay;
	PERIOD_TYPE = PERIOD_TYPE;
	constructor(private symbolStorageService: SymbolStorageService) {}

	ngOnInit(): void {
		this.stockDetailsFinancialRatios$ = this.symbolStorageService.queryStockDetailsFinancialRatios();
		this.chartHeight = WindowService.getWindowHeightPrctInPx(28);
	}

	changeActiveStatement(event: any) {
		this.activeStatement = event.detail.value as Period;
		this.stockDetailsFinancialRatios$ = this.symbolStorageService.queryStockDetailsFinancialRatios(this.activeStatement);
	}
}
