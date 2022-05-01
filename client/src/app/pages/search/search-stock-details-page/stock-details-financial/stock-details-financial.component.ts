import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StockDetails, SymbolStorageService } from '@core';
import { BREAK_POINTS } from '@shared';
import { map, Observable } from 'rxjs';
import { STATEMENT_TYPE, STOCK_SEARCH_DETAILS_FINANCIAL_PAGES } from '../../models/pages.model';

@Component({
	selector: 'app-stock-details-financial',
	templateUrl: './stock-details-financial.component.html',
	styleUrls: ['./stock-details-financial.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailsFinancialComponent implements OnInit {
	stockDetails$!: Observable<StockDetails | null>;

	activeStatement = STATEMENT_TYPE.BALANCE_SHEET;
	STOCK_SEARCH_DETAILS_FINANCIAL_PAGES = STOCK_SEARCH_DETAILS_FINANCIAL_PAGES;
	STATEMENT_TYPE = STATEMENT_TYPE;

	pricePositionBreakPoint$!: Observable<boolean>;
	pricePositionBreakPointMobile$!: Observable<boolean>;

	constructor(private symbolStorageService: SymbolStorageService, private breakpointObserver: BreakpointObserver) {}

	ngOnInit() {
		this.stockDetails$ = this.symbolStorageService.getStockDetails();
		this.pricePositionBreakPoint$ = this.breakpointObserver.observe([BREAK_POINTS.XXL_DOWN]).pipe(map((x) => x.matches));
		this.pricePositionBreakPointMobile$ = this.breakpointObserver.observe([BREAK_POINTS.SM_DOWN]).pipe(map((x) => x.matches));
	}

	changeActiveStatement(event: any) {
		this.activeStatement = event.detail.value;
	}
}
