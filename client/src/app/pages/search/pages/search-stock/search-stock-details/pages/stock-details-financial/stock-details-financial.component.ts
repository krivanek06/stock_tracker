import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StockDetails, SymbolStorageService} from '@core';
import {Observable} from 'rxjs';
import {STATEMENT_TYPE, STOCK_SEARCH_DETAILS_FINANCIAL_PAGES} from '../../../../../models/pages.model';


@Component({
    selector: 'app-stock-details-financial',
    templateUrl: './stock-details-financial.component.html',
    styleUrls: ['./stock-details-financial.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailsFinancialComponent implements OnInit {
    stockDetails$: Observable<StockDetails>;

    activeStatement = STATEMENT_TYPE.BALANCE_SHEET;
    STATEMENT_TYPE = STATEMENT_TYPE;
    STOCK_SEARCH_DETAILS_FINANCIAL_PAGES = STOCK_SEARCH_DETAILS_FINANCIAL_PAGES;

    constructor(private symbolStorageService: SymbolStorageService) {
    }


    ngOnInit() {
        this.stockDetails$ = this.symbolStorageService.getStockDetails();
        this.stockDetails$.subscribe(console.log);
    }


    changeActiveStatement(event: CustomEvent) {
        this.activeStatement = event.detail.value;
    }
}
