import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StockDetails, SymbolStorageService } from '@core';
import { Observable } from 'rxjs';
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

	constructor(private symbolStorageService: SymbolStorageService) {}

	ngOnInit() {
		this.stockDetails$ = this.symbolStorageService.getStockDetails();
	}

	changeActiveStatement(event: any) {
		this.activeStatement = event.detail.value;
	}
}
